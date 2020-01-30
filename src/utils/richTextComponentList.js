import ContentfulHeading from '../components/heading/heading';
import ContentfulLink from '../components/link/linkCTA';
import ContentfulTable from '../components/table/dataTable';

export const componentList = {
  ContentfulHeading,
  ContentfulLink,
  ContentfulTable,
};

export const typeList = (contentType) => {
  switch (contentType) {
  case 'heading':
    return 'ContentfulHeading';
  case 'link':
    return 'ContentfulLink';
  case 'table':
    return 'ContentfulTable';
  default:
    return '';
  }
};
