import express, {
  Request,
  Response,
  NextFunction,
  RequestHandler,
} from "express"; // needs "npm i @types/express"
import { request } from "http";
import { Todo, TodoModel } from "../models/todo";

// const TODOS: Todo[] = [];

export const createTodo: RequestHandler = async (req, res, next) => {
  try {
    const data: TodoModel = req.body;
    let todos = await Todo.create(data);
    return res.status(201).json({ message: "Create the todo", data: todos });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const getTodos: RequestHandler = async (req, res, next) => {
  try {
    let todos = await Todo.find({});
    return res.status(200).json({ message: "All toods", data: todos });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateTodo: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    let todos = await Todo.findByIdAndUpdate(id, req.body, { new: true });
    return res.status(200).json({ message: "Todo updated" , data:todos});
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteTodo: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    let todos = await Todo.findByIdAndDelete(id);
    return res.status(200).json({ message: "Todo deleted", data:todos });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};
