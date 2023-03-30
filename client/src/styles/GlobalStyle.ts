import { createGlobalStyle } from "styled-components";
import "normalize.css";

export const GlobalStyle = createGlobalStyle`
  * {
      /* CONFIGS */
      box-sizing: border-box;
      transition: font-size 0.3s ease-in-out;  
      overflow-x: hidden;

      /* Hide scrollbar for Firefox */
      scrollbar-width: none;
      -ms-overflow-style: none; /* IE and Edge */

      /* Hide scrollbar for Chrome and Edge */
      &::-webkit-scrollbar {
        width: 0rem;
        height: 0rem;
      }

      /* &::-webkit-scrollbar-thumb {
        background-color: black;
        border-radius: 0.4rem;
      } */

      a {
        text-decoration: none;
      }
      
      button {
        all: unset;
        user-select: none;
      }
  }

  html {
    height: clamp(66.7rem, 100vh, 100vh);
    font-size: 62.5%;
    body {
      height: 100%;
      #root {
        height: inherit;
        font-size: 2rem;
      }
    }
  }
`;
