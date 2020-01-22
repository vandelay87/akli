import { createGlobalStyle } from 'styled-components';
import normalize from './normalize';
import { fontFaces, robotoRegular } from './fonts';

const GlobalStyles = createGlobalStyle`
  ${fontFaces}
  ${normalize}

  body {
    ${robotoRegular}
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }
`;

export default GlobalStyles;
