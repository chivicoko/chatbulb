import dbConnect from '@/lib/mongodb';
import openai from '@/lib/openai';
import LightStatus from '@/models/LightStatus';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  await dbConnect();

  try {
    let lightStatus = await LightStatus.findOne();
    if (!lightStatus) {
      lightStatus = await LightStatus.create({ status: false });
    }
    return NextResponse.json({ status: lightStatus.status });
  } catch (error) {
    console.error('GET request error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  await dbConnect();

  try {
    const body = await req.json();
    const { status } = body;

    if (typeof status === 'boolean') {
      const updatedStatus = await LightStatus.findOneAndUpdate(
        {},
        { status },
        { new: true, upsert: true }
      );
      return NextResponse.json({ status: updatedStatus.status });
    }

    const { useAI, message } = body;

    if (useAI && message) {
      const response = await openai.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [{ role: 'user', content: `Toggle light: ${message}` }],
        max_tokens: 100,
      });

      const aiResponse = response.choices[0]?.message?.content?.trim();
      const newStatus = aiResponse?.toLowerCase().includes('on');
      const updatedStatus = await LightStatus.findOneAndUpdate(
        {},
        { status: newStatus },
        { new: true, upsert: true }
      );
      return NextResponse.json({ status: updatedStatus.status });
    }

    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  } catch (error) {
    console.error('POST request error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}


export function OPTIONS() {
  return NextResponse.json({ allowedMethods: ['GET', 'POST'] }, { status: 200 });
}
