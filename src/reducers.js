import { CHANGE_SEARCH_FIELD } from "./constants";

const initialState = {
  searchbox: "",
};

export const searchRobots = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, (searchbox) => action.payload);
  }
};
