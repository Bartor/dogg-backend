import dotenv from "dotenv";
import express from "express";
import admin from "firebase-admin";

dotenv.config();

const app = express();

const firebase = admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: process.env.GOOGLE_APPLICATION_DATABASE_URL,
});

app.listen(process.env.SERVER_PORT, () => {
  // tslint:disable-next-line: no-console
  console.log(`Server is runnning at ${process.env.SERVER_PORT}`);
});
