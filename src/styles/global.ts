import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    font-size: 14px;
    -webkit-font-smoothing: antialiased !important;
    background-color: ${({ theme }) => theme.colors.background};
  }


  body, input, button {
    font-size: 14px;
    font-family: Roboto, sans-serif;
    color: ${({ theme }) => theme.colors.text};
  }
`;
