import { createGlobalStyle } from "styled-components";
import "normalize.css";

export const GlobalStyle = createGlobalStyle`
  * {
      /**
        COLORS
      */
        --spring-1: rgb(255, 181, 167);
        --spring-2: rgb(252, 213, 206); 
        --spring-3: rgb(248, 237, 235); 
        --spring-4: rgb(249, 220, 196); 
        --spring-5: rgb(254, 200, 154);

        --summer-1: rgb(255,123,0);
        --summer-2: rgb(255,136,0);
        --summer-3: rgb(255,149,0);
        --summer-4: rgb(255,162,0);
        --summer-5: rgb(255,170,0);
        --summer-6: rgb(255,183,0);
        --summer-7: rgb(255,195,0);
        --summer-8: rgb(255,208,0);
        --summer-9: rgb(255,221,0);
        --summer-10: rgb(255,234,0);

        --fall-1: rgb(3,7,30);
        --fall-1: rgb(55,6,23);
        --fall-1: rgb(106,4,15);
        --fall-1: rgb(157,2,8);
        --fall-1: rgb(208,0,0);
        --fall-1: rgb(220,47,2);
        --fall-1: rgb(232,93,4);
        --fall-1: rgb(244,140,6);
        --fall-1: rgb(250,163,7);
        --fall-1: rgb(255,186,8);

        --winter-1; rgb(3,4,94);
        --winter-1; rgb(2,62,138);
        --winter-1; rgb(0,119,182);
        --winter-1; rgb(0,150,199);
        --winter-1; rgb(0,180,216);
        --winter-1; rgb(72,202,228);
        --winter-1; rgb(144,224,239);
        --winter-1; rgb(173,232,244);
        --winter-1; rgb(202,240,248);
      /**
        COLORS
      */
        
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
