/* 
Name : Mostafa Ahmed Mohamed Salah Eldin
Group : C38 Saturday 10Am Node.js
Assignment : 6
*/
import express from "express";
import connectDB from "./DB/connection.js";
import { authRouter, userRouter } from "./index.router.js";

const app = express();
const port = 3000;
const basedUrl = `/api/v1`;
app.use(express.json());

app.use(`${basedUrl}/auth`, authRouter);
app.use(`${basedUrl}/user`, userRouter);

connectDB();
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
