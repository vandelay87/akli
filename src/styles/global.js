import { createGlobalStyle } from 'styled-components'
import normalize from 'normalize.css'
import { fontFaces, robotoRegular } from './fonts'

const GlobalStyles = createGlobalStyle`
  ${fontFaces}
  ${normalize}

  body {
    ${robotoRegular}
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;

    p {
      ${robotoRegular}
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      font-size: 1rem;
      line-height: 1.5rem;
      font-weight: 400;
      letter-spacing: .03125em;
    }
  }
`

export default GlobalStyles
