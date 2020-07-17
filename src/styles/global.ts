import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

  * {
    margin: 0 ;
    padding: 0 ;
    outline: 0 ;
    box-sizing: border-box ;
  }

  body {
    background: ${props => props.theme.colors.background};
    font-size: 14px;
    color: ${props => props.theme.colors.text};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;
