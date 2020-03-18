import "dotenv/config";

import mongoose from "mongoose";
import express from "express";
import cors from "cors";

import Todos from "../routes/todos.route";

import { DB_OPTIONS, DB_URI } from "../config/database.config";

class Server {
  constructor() {
    this.express = express();
    this.middlewares();
    this.database();
    this.routes();
  }

  middlewares() {
    this.express.use(cors());
    this.express.use(express.json());
  }
  routes() {
    this.express.use("/api/todos", Todos);
  }
  database() {
    mongoose.connect(DB_URI, DB_OPTIONS);
  }
}
export default new Server().express;
