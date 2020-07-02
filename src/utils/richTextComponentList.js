import ContentfulHeading from '../components/heading/heading'
import ContentfulLink from '../components/link/link'
import ContentfulTable from '../components/table/dataTable'
import ContentfulFigureImage from '../components/image/figureImage'
import ContentfulChips from '../components/chips/chips'

export const componentList = {
  ContentfulHeading,
  ContentfulLink,
  ContentfulTable,
  ContentfulFigureImage,
  ContentfulChips,
}

export const typeList = contentType => {
  switch (contentType) {
    case 'heading':
      return 'ContentfulHeading'
    case 'link':
      return 'ContentfulLink'
    case 'table':
      return 'ContentfulTable'
    case 'figureImage':
      return 'ContentfulFigureImage'
    case 'chips':
      return 'ContentfulChips'
    default:
      return ''
  }
}
