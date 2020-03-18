import { TodoActions } from "./todos";

const TYPES = {
  CHANGE: "@description/CHANGE",
  CLEAR: "@description/CLEAR"
};

export const DescriptionsActions = {
  change: event => ({
    type: TYPES.CHANGE,
    payload: event.target.value
  }),
  clear: () => [
    {
      type: TYPES.CLEAR
    },
    TodoActions.search()
  ]
};

const INITIAL_STATE = {
  value: ""
};

export const DescriptionReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.CHANGE:
      return {
        value: action.payload
      };
    case TYPES.CLEAR:
      return {
        ...INITIAL_STATE
      };
    default:
      return state;
  }
};
