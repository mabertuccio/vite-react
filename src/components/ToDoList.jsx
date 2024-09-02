import React from "react";
import PropTypes from "prop-types";
import { Button } from "./Button.jsx";

function ToDoInput(props) {
  const [value, setValue] = React.useState("");

  return (
    <div>
      <input value={value} onChange={(event) => setValue(event.target.value)} />
      <Button
        onClick={() => {
          props.onAddInput(value);
          setValue("");
        }}
      >
        Add
      </Button>
    </div>
  );
}

export function ToDoList() {
  const [items, setItems] = React.useState([]);
  const removeFromItems = (indexToRemove) =>
    setItems(items.filter((_, index) => index !== indexToRemove));

  return (
    <div className="main-page">
      <ToDoInput
        onAddInput={(newItem) => setItems([...items, newItem])}
      ></ToDoInput>
      <ul>
        {items.map((item, i) => (
          <li key={i}>
            {item} <Button onClick={() => removeFromItems(i)}>X</Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

ToDoList.propTypes = {
  onAddInput: PropTypes.func.isRequired,
};

ToDoInput.propTypes = {
  onAddInput: PropTypes.func.isRequired,
};

export default ToDoList;
