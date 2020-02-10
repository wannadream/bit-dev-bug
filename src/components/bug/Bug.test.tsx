import React from "react";
import ReactDOM from "react-dom";
import Bug from "./Bug";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Bug />, div);
});
