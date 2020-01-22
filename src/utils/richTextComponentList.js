import ContentfulHeading from '../components/heading/heading';
import ContentfulLink from '../components/link/linkCTA';

export const componentList = {
  ContentfulHeading,
  ContentfulLink,
};

export const typeList = (contentType) => {
  switch (contentType) {
  case 'heading':
    return 'ContentfulHeading';
  case 'link':
    return 'ContentfulLink';
  default:
    return '';
  }
};
