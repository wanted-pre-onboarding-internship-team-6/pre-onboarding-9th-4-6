import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    overflow-x: hidden;
  }

  body {
    font-family: 'Courier New', Courier, monospace;
    font-weight: 400;
    line-height: 1.5;
    overflow: hidden;
    background-color: #f3f3f3;
    width: 100%; 
    height: 100%;
    position: relative;
  }
`;
