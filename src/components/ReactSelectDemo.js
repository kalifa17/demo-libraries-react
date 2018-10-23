import React from "react";
import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" }
];

const ReactSelectDemo = () => (
  <div>
    <h2>React Select v2</h2>
    <Select isMulti options={options} />
  </div>
);

export default ReactSelectDemo;
