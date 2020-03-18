import api from "../../services/api";
import { DescriptionsActions } from "./description";

const TYPES = {
  SEARCH: "@todos/SEARCH",
  GET_ALL: "@todos/GET_ALL",
  ADD: "@todos/ADD",
  MARK_AS_DONE: "@todos/MARK_AS_DONE",
  MARK_AS_PENDING: "@todos/MARK_AS_PENDING",
  REMOVE: "@todos/REMOVE"
};

export const TodoActions = {
  add(description) {
    return async dispatch => {
      api
        .post("/api/todos", { description })
        .then(resp => dispatch(DescriptionsActions.clear()))
        .then(resp => dispatch(this.search()));
    };
  },
  search: () => {
    return (dispatch, getState) => {
      const description = getState().description.value;
      const filter = description ? `?contains=${description}` : "";

      api.get(`/api/todos${filter}`).then(resp =>
        dispatch({
          type: TYPES.SEARCH,
          payload: resp.data
        })
      );
    };
  },
  getAll: () => {
    return {
      type: TYPES.GET_ALL
    };
  },
  markAsDone(todo) {
    return dispatch => {
      api
        .put(`/api/todos/${todo._id}`, {
          done: true
        })
        .then(resp => dispatch({ type: TYPES.MARK_AS_DONE }))
        .then(resp => dispatch(this.search()));
    };
  },
  markAsPending(todo) {
    return dispatch => {
      api
        .put(`/api/todos/${todo._id}`, {
          done: false
        })
        .then(resp => dispatch({ type: TYPES.MARK_AS_PENDING }))
        .then(resp => dispatch(this.search()));
    };
  },
  remove(todo) {
    return dispatch => {
      api
        .delete(`/api/todos/${todo._id}`)
        .then(resp => dispatch({ type: TYPES.REMOVE }))
        .then(resp => dispatch(this.search()));
    };
  }
};

const INITIAL_STATE = {
  value: []
};

export const TodoReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.SEARCH:
      return {
        value: action.payload
      };

    case TYPES.GET_ALL:
      return {
        ...INITIAL_STATE
      };

    default:
      return state;
  }
};
