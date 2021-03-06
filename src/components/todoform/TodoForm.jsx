/** @jsxImportSource @emotion/react */
import "@emotion/react";
import React from "react";
import { useTheme } from "@emotion/react";
import PropTypes from "prop-types";

// import styles from "./todoform.module.css";
import * as styles from "./todoform.style";

const TodoForm = ({ addTodo, showAdd }) => {
  const [value, setValue] = React.useState("");
  const theme = useTheme();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!value) {
      alert("No blank todo");
      return;
    }

    if (value.length > 40) {
      alert("Please create a shorter todo text!");
      setValue("");
      return;
    }

    addTodo(value);
    setValue("");
  };

  if (showAdd) {
    return (
      <section css={styles.add}>
        <form css={styles.addForm} onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder="tulis disini"
            css={styles.addInput({ theme })}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button css={styles.addBtn({ theme })}>Add</button>
        </form>
      </section>
    );
  } else {
    return null;
  }
};

TodoForm.protoTypes = {
  addTodo: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired
};

export default TodoForm;
