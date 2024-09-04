import mongoose, { Schema, model, models } from 'mongoose';

const LightStatusSchema = new Schema({
  status: { type: Boolean, default: false },
});

const LightStatus = models.LightStatus || model('LightStatus', LightStatusSchema);
export default LightStatus;
