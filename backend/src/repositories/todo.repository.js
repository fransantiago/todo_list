import TodosModel from "../models/todos.model";
import mongoose from "mongoose";

class Todos {
  async find(todos = {}) {
    return await TodosModel.find(todos).sort("-createdAt");
  }

  async insert(todo) {
    return await TodosModel.create(todo);
  }

  async update(todoId, todoDoneStatus) {
    return await TodosModel.updateOne(
      {
        _id: mongoose.Types.ObjectId(todoId)
      },
      {
        $set: {
          done: todoDoneStatus
        }
      }
    );
  }

  async remove(todoId) {
    return await TodosModel.deleteOne({ _id: mongoose.Types.ObjectId(todoId) });
  }
}

export default new Todos();
