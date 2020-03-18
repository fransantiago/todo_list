import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { DescriptionsActions } from "../store/ducks/description";
import { TodoActions } from "../store/ducks/todos";

import Grid from "../templates/Grid";
import IconButton from "../templates/IconButton";

export default props => {
  const description = useSelector(state => state.description.value);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(TodoActions.search());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleKeyPressed = e => {
    if (e.key === "Enter") {
      e.shiftKey ? dispatch(TodoActions.search()) : dispatch(TodoActions.add(description));
    } else if (e.key === "Escape") {
      dispatch(DescriptionsActions.clear());
    }
  };

  return (
    <div role="form" className="todoForm mb-4">
      <div className="form-row col-12">
        <Grid cols="12 9 10">
          <input type="text" className="form-control" placeholder="Adicione uma tarefa" onChange={e => dispatch(DescriptionsActions.change(e))} onKeyUp={handleKeyPressed} value={description} />
        </Grid>
        <Grid cols="12 3 2" otherClasses="d-flex justify-content-center">
          <IconButton btnStyle="primary" fontAwesomeIcon="plus" onClick={() => dispatch(TodoActions.add(description))} />
          <IconButton btnStyle="info" fontAwesomeIcon="search" onClick={() => dispatch(TodoActions.search())} />
          <IconButton btnStyle="default" fontAwesomeIcon="close" otherClasses="border-gray" onClick={() => dispatch(DescriptionsActions.clear())} />
        </Grid>
      </div>
    </div>
  );
};
