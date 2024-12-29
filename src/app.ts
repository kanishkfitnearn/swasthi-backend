
import express, { Application } from 'express';
// import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import landingPageRoutes from './routes/landingPage';
import newPageRoutes from "./routes/newPageRoutes";
import bodyParser from 'body-parser';
// import cors from 'cors';
import aboutUsRoutes from './routes/aboutUs';
import dataDeletionRoutes from './routes/dataDeletion';
import termsConRoutes from './routes/termsCon';
import returnRefundRoutes from './routes/returnRefund';
import privacyPolicyRoutes from './routes/privacyPolicy';

import errorHandler from './middlewares/errorHandler';
dotenv.config();
const cors = require('cors')
const app: Application = express();
app.use(express.json());


app.use(cors({ origin: 'http://localhost:3001' }));
// app.use(cors({ origin: 'http://localhost:3000' }));
app.use(bodyParser.json());

app.use(errorHandler);
app.use('/api', returnRefundRoutes);
app.use('/api', aboutUsRoutes);
app.use('/api',dataDeletionRoutes);
app.use('/api',termsConRoutes);
app.use('/api',privacyPolicyRoutes);
app.use("/api/new-page", newPageRoutes);
app.use('/api/landing-pages', landingPageRoutes);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log('MongoDB connected!');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

connectDB();

export default app;
