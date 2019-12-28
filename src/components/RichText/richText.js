import React from 'react';
import richTextRenderer from '../../utils/richTextRenderer';

const RichText = ({ content }) => <div>{richTextRenderer(content.article)}</div>;

export default RichText;
