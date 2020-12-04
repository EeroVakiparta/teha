import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";
import Button from "react-bootstrap/Button";

const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          if (!input.value.trim()) {
            return;
          }

          dispatch(addTodo(input.value));
          input.value = "";
        }}
      >
        <input
          style={{
            width: "30%",
            paddingLeft: "8px",
            paddingTop: "6px",
            paddingBottom: "6px",
            margin: "1em",
          }}
          type="text"
          ref={(el) => (input = el)}
        />
        <Button type="submit">ADD A TODO</Button>
      </form>
    </div>
  );
};

export default connect()(AddTodo);
