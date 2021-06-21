/** @jsxImportSource @emotion/react */
import "@emotion/react";

import PropTypes from "prop-types";
import { useTheme } from "@emotion/react";
import Button from "../button/Button";
// import styles from "../header/header.module.css";
import * as styles from "./header.styles";

const Header = ({ showAddToggle, showAdd, clearTodos }) => {
  const theme = useTheme();

  return (
    <section css={styles.header}>
      <Button text={showAdd ? "Finish" : "Add"} onClick={showAddToggle} />
      <h1 css={styles.headerTitle(theme)}>ToDo Lists</h1>
      <Button text="clear" onClick={clearTodos} color="red" align="right" />
    </section>
  );
};

Header.propTypes = {
  showAddToggle: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired,
  clearTodos: PropTypes.func.isRequired
};

export default Header;
