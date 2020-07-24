import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from "./constants";

import * as reducers from "./reducers";

describe("searchRobots", () => {
  const initialStateSearch = {
    searchFiled: "",
  };
  it("searchRobots", () => {
    expect(reducers.searchRobots(undefined, {})).toEqual({ searchFiled: "" });
  });
  it("should handle change searchFiled", () => {
    expect(
      reducers.searchRobots(initialStateSearch, {
        type: CHANGE_SEARCH_FIELD,
        payload: "abc",
      })
    ).toEqual({ searchFiled: "abc" });
  });
});
