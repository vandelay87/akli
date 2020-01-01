import ContentfulHeading from '../components/Heading/heading';

export const componentList = {
  ContentfulHeading,
};

export const typeList = (contentType) => {
  switch (contentType) {
    case 'heading':
      return 'ContentfulHeading';
    default:
      return '';
  }
};
