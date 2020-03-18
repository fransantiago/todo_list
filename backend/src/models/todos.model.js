import { Schema, model } from "mongoose";

const Todos = new Schema(
  {
    description: {
      type: String,
      required: true
    },
    done: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  {
    timestamps: true
  }
);

export default model("todo", Todos);
