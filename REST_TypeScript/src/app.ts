// const express = require("express")
import bodyParser, {json} from "body-parser";
import express, {Request, Response, NextFunction} from "express"; // needs "npm i @types/express"
import todoRoutes from "./routes/todo"
const app = express();
app.use(json())
app.listen(3005)

app.use("/todo", todoRoutes);
app.use((err:Error, req:Request, res:Response, next:NextFunction) =>{
res.status(500).json({message: err.message})
})