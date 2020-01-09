import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import { componentList, typeList } from './richTextComponentList';

const richTextRenderer = (richTextJSON) => {
  const locale = process.env.AKLIAISSAT_CONTENTFUL_LOCALE || 'en-GB';

  const renderComponent = (type, fields) => {
    const Component = componentList[type];
    return <Component key={fields.id} {...fields} />;
  };

  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <strong>{text}</strong>,
      [MARKS.ITALIC]: (text) => <em>{text}</em>,
      [MARKS.UNDERLINE]: (text) => <u>{text}</u>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
      [BLOCKS.HEADING_1]: (node, children) => renderComponent('ContentfulHeading', { title: children.toString(), size: 1 }),
      [BLOCKS.HEADING_2]: (node, children) => renderComponent('ContentfulHeading', { title: children.toString(), size: 2 }),
      [BLOCKS.HEADING_3]: (node, children) => renderComponent('ContentfulHeading', { title: children.toString(), size: 3 }),
      [BLOCKS.HEADING_4]: (node, children) => renderComponent('ContentfulHeading', { title: children.toString(), size: 4 }),
      [BLOCKS.HEADING_5]: (node, children) => renderComponent('ContentfulHeading', { title: children.toString(), size: 5 }),
      [BLOCKS.HEADING_6]: (node, children) => renderComponent('ContentfulHeading', { title: children.toString(), size: 6 }),
      [BLOCKS.LIST_ITEM]: (node, children) => <>{children}</>,
      [BLOCKS.EMBEDDED_ENTRY]: (node) => {
        const { fields } = node.data.target;
        const contentType = typeList(node.data.target.sys.contentType.sys.id);

        const cleanFields = Object.fromEntries(
          Object.entries(fields).map(([key, value]) => [
            key, value[locale] ? value[locale] : value,
          ]),
        );

        return renderComponent(contentType, cleanFields);
      },
      [INLINES.EMBEDDED_ENTRY]: (node) => {
        const { fields } = node.data.target;
        const contentType = typeList(node.data.target.sys.contentType.sys.id);

        const cleanFields = Object.fromEntries(
          Object.entries(fields).map(([key, value]) => [
            key, value[locale] ? value[locale] : value,
          ]),
        );

        return renderComponent(contentType, cleanFields);
      },
    },
  };

  return documentToReactComponents(richTextJSON, options);
};

export default richTextRenderer;
