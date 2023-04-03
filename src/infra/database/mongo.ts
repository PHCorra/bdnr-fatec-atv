import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config();

export const startDB = async () => { 
  try {
    await mongoose.connect(process.env.MONGO_CONNECTION_STRING!, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    } as mongoose.ConnectOptions)
    console.log('Connected to mongoDB Atlas');
  } catch (error) {
    console.error(error)
  }
};

export const disconnectDB = async () => {
  await mongoose.disconnect();
}

