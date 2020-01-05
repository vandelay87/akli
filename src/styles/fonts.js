import { css } from 'styled-components';
import RobotoRegular from '../assets/fonts/Roboto-Regular.ttf';

export const fontFaces = css`
  @font-face {
    font-family: 'Roboto Regular';
    font-style: normal;
    font-weight: normal;
    src: local('Roboto Regular'), local('Roboto-Regular'), url(${RobotoRegular}) format('ttf');
  }
`;

export const robotoRegular = css`
  font-family: 'Roboto Regular', sans-serif;
`;
