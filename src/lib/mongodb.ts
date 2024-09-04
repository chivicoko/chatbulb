import mongoose, { Connection } from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

let cached: { conn: Connection | null; promise: Promise<Connection> | null } = {
  conn: null,
  promise: null,
};

async function dbConnect(): Promise<Connection> {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then((mongooseInstance) => {
      cached.conn = mongooseInstance.connection;
      return cached.conn;
    });
  }

  return cached.promise;
}

export default dbConnect;
