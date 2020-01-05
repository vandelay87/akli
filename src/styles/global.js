import { createGlobalStyle } from 'styled-components';
import normalize from './normalize';
import { fontFaces, robotoRegular } from './fonts';

const GlobalStyles = createGlobalStyle`
  ${fontFaces}
  ${normalize}

  body {
    ${robotoRegular}
  }
`;

export default GlobalStyles;
