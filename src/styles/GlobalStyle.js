import { createGlobalStyle } from "styled-components/macro"

export const GlobalStyles = createGlobalStyle`

:root{
    --light-black:#565656;
    --dark-white:#DDDDDD;
    --font-color:#dbdbdb;
    --font-small:14px;
}

*,
  *:before,
  *:after {
    box-sizing: inherit;
  }

body{
    background:var(--light-black);
    margin: 0;
}
`