import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { TodoActions } from "../store/ducks/todos";

import IconButton from "../templates/IconButton";

export default props => {
  const todos = useSelector(state => state.todos.value);
  const dispatch = useDispatch();

  const renderRows = todosList => {
    return todosList.map(todo => (
      <tr key={todo._id}>
        <td className={todo.done ? "text-secondary markAsDone" : ""}>{todo.description}</td>
        <td>
          <IconButton btnStyle="success" fontAwesomeIcon="check" onClick={() => dispatch(TodoActions.markAsDone(todo))} hide={todo.done} />
          <IconButton btnStyle="warning" fontAwesomeIcon="undo" onClick={() => dispatch(TodoActions.markAsPending(todo))} hide={!todo.done} />
          <IconButton btnStyle="danger" fontAwesomeIcon="trash-o" onClick={() => dispatch(TodoActions.remove(todo))} hide={!todo.done} />
        </td>
      </tr>
    ));
  };

  return (
    <div>
      <table className="table table-hover">
        <caption>Lista de tarefas</caption>
        <thead className="thead-light">
          <tr>
            <th scope="col" style={{ width: 920 }}>
              Descrição
            </th>
            <th scope="col" className="">
              Ações
            </th>
          </tr>
        </thead>
        <tbody>{renderRows(todos || [])}</tbody>
      </table>
    </div>
  );
};
