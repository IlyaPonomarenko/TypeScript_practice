import express, {Request, Response, NextFunction, RequestHandler} from "express"; // needs "npm i @types/express"
import { Todo } from "../models/todo";
const TODOS = [];
export const createTodo:RequestHandler = (req, res, next) => {
   // const text = req.body.text;
    const text = (req.body as {text:string}).text;
    const newTodo = new Todo(Math.random().toString(), text)
    TODOS.push(newTodo);
    res.status(201).json({message:"Create the todo", createTodo: newTodo})
};
