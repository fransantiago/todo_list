import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { TodoActions } from "../store/ducks/todos";

import PageHeader from "../templates/PageHeader";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default props => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(TodoActions.getAll());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <PageHeader name="Tarefas" small="Cadastro" />
      <TodoForm />
      <TodoList />
    </div>
  );
};
