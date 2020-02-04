import ContentfulHeading from '../components/heading/heading';
import ContentfulLink from '../components/link/linkCTA';
import ContentfulTable from '../components/table/dataTable';
import ContentfulFigureImage from '../components/image/figureImage';

export const componentList = {
  ContentfulHeading,
  ContentfulLink,
  ContentfulTable,
  ContentfulFigureImage,
};

export const typeList = (contentType) => {
  switch (contentType) {
  case 'heading':
    return 'ContentfulHeading';
  case 'link':
    return 'ContentfulLink';
  case 'table':
    return 'ContentfulTable';
  case 'figureImage':
    return 'ContentfulFigureImage';
  default:
    return '';
  }
};
