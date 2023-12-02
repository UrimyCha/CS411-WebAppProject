import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect("MONGO")

const app = express(process.env.MONGO);

app.listen(3000, () => {
  console.log('Server is listening on port 3000')
});