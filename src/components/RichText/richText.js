import React from 'react';
import richTextRenderer from '../../utils/richTextRenderer';

const RichText = ({ article }) => <div>{richTextRenderer(article.json)}</div>;

export default RichText;
