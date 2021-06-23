import { css } from "@emotion/react";

export const header = () =>
  css`
    display: flex;
    align-items: flex-start;
  `;

export const headerTitle = (theme) =>
  css`
    color: ${theme.color.primary.black};
    text-align: center;
    font-size: 3.6rem;
    font-family: "Homemade Apple", sans-serif;
    text-transform: lowercase;
  `;
