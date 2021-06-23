/** @jsxImportSource @emotion/react */
import "@emotion/react";

import PropTypes from "prop-types";
import { useTheme } from "@emotion/react";
import Button from "../button/Button";
import Container from "../../layout/Container";
import Item from "../../layout/Item";

// import styles from "../header/header.module.css";
import * as styles from "./header.styles";

const Header = ({ showAddToggle, showAdd, clearTodos }) => {
  const theme = useTheme();

  return (
    <section className="header-component">
      <Container alignItems="flex-start">
        <Item flex={1}>
          <Button text={showAdd ? "Finish" : "Add"} onClick={showAddToggle} />
        </Item>
        <Item flex={2}>
          <h1 css={styles.headerTitle(theme)}>ToDo Lists</h1>
        </Item>
        <Item flex={1} align="right">
          <Button text="clear" onClick={clearTodos} color="red" align="right" />
        </Item>
      </Container>
    </section>
  );
};

Header.propTypes = {
  showAddToggle: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired,
  clearTodos: PropTypes.func.isRequired
};

export default Header;
