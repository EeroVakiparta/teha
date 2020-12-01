import React from "react";
import { connect } from "react-redux";
import { addTodo } from '../actions';

const AddTodo = ({ dispatch }) => {
  let input;
  return (
    <div>
      <p>Add something please:</p>
      <form
        onSubmit={
          e => {
            e.preventDefault();
            if (!input.value.trim()) {
              return
            }
            dispatch(addTodo(input.value));
            input.value="";
          }
        }
      >
        <input type="text" ref={el => (input = el)} />
        <button type="submit">ADD</button>
      </form>
    </div>
  );
};

export default connect()(AddTodo); // https://react-redux.js.org/api/connect
