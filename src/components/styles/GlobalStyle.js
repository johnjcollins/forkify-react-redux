import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }
  @media only screen and (max-width: 68.75em) {
    html {
      font-size: 50%;
    }
  }

  body {
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 400;
    line-height: 1.6;
    color: #655a56;
    background-image: linear-gradient(to right bottom, #fbdb89, #f48982);
    background-size: cover;
    background-repeat: no-repeat;
    min-height: calc(100vh - 2 * 4vw);
  }

  .heading-2 {
    font-size: 1.8rem;
    font-weight: 600;
    color: #f59a83;
    text-transform: uppercase;
    margin-bottom: 2.5rem;
    text-align: center;
    transform: skewY(-3deg);
  }

  .link:link,
  .link:visited {
    color: #968b87;
  }
`;

export default GlobalStyle;
