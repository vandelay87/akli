import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types'
import { componentList, typeList } from './richTextComponentList'
import regexValidator from './regexValidator'

const richTextRenderer = richTextJSON => {
  const cleanProperties = dirtyObj => {
    const cleanObj = JSON.parse(JSON.stringify(dirtyObj))
    const locale = process.env.CONTENTFUL_LOCALE || 'en-GB'

    /* eslint-disable no-param-reassign */
    const deepObjectLoop = obj => {
      Object.keys(obj).forEach(key => {
        if (obj[key] && typeof obj[key][locale] !== 'undefined') {
          const localeValue = obj[key][locale]

          delete obj[key][locale]
          obj[key] = localeValue
        }

        if (
          obj[key] &&
          typeof obj[key].sys !== 'undefined' &&
          typeof obj[key].sys.id !== 'undefined'
        ) {
          const idValue = obj[key].sys.id

          delete obj[key].sys
          obj[key].id = idValue
        }

        if (obj[key] && typeof obj[key].fields !== 'undefined') {
          const localeValue = obj[key].fields
          const idValue = obj[key].id

          delete obj[key].fields
          obj[key] = localeValue

          if (idValue !== 'undefined') {
            obj[key].id = idValue
          }
        }

        if (typeof obj[key] === 'object') {
          deepObjectLoop(obj[key])
        }
      })
    }

    deepObjectLoop(cleanObj)
    return cleanObj
  }

  const getID = (name, propID) => {
    return (
      propID ||
      Math.random()
        .toString(36)
        .replace('0.', `${name}_` || '')
        .toLowerCase()
    )
  }

  const renderComponent = (type, fields) => {
    const Component = componentList[type]
    const cleanFields = cleanProperties(fields)

    return <Component key={getID(type, fields.id)} {...cleanFields} />
  }

  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <strong>{text}</strong>,
      [MARKS.ITALIC]: text => <em>{text}</em>,
      [MARKS.UNDERLINE]: text => <u>{text}</u>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
      [BLOCKS.HEADING_1]: (node, children) =>
        renderComponent('ContentfulHeading', {
          title: children.toString(),
          size: 1,
        }),
      [BLOCKS.HEADING_2]: (node, children) =>
        renderComponent('ContentfulHeading', {
          title: children.toString(),
          size: 2,
        }),
      [BLOCKS.HEADING_3]: (node, children) =>
        renderComponent('ContentfulHeading', {
          title: children.toString(),
          size: 3,
        }),
      [BLOCKS.HEADING_4]: (node, children) =>
        renderComponent('ContentfulHeading', {
          title: children.toString(),
          size: 4,
        }),
      [BLOCKS.HEADING_5]: (node, children) =>
        renderComponent('ContentfulHeading', {
          title: children.toString(),
          size: 5,
        }),
      [BLOCKS.HEADING_6]: (node, children) =>
        renderComponent('ContentfulHeading', {
          title: children.toString(),
          size: 6,
        }),
      [BLOCKS.LIST_ITEM]: (node, children) => <>{children}</>,
      [BLOCKS.EMBEDDED_ASSET]: node => {
        const { fields } = node.data.target

        return renderComponent('ContentfulFigureImage', { image: { fields } })
      },
      [BLOCKS.EMBEDDED_ENTRY]: node => {
        const { fields } = node.data.target
        const contentType = typeList(node.data.target.sys.contentType.sys.id)

        return renderComponent(contentType, fields)
      },
      [INLINES.EMBEDDED_ENTRY]: node => {
        const { fields } = node.data.target
        const contentType = typeList(node.data.target.sys.contentType.sys.id)

        return renderComponent(contentType, fields)
      },
      [INLINES.HYPERLINK]: (node, children) => {
        const { uri } = node.data
        const external = regexValidator.url.test(uri)

        return renderComponent('ContentfulLink', {
          title: children.toString(),
          link: uri,
          external,
        })
      },
    },
  }

  return documentToReactComponents(richTextJSON, options)
}

export default richTextRenderer
