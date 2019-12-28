import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const richTextRenderer = (richTextJSON) => documentToReactComponents(richTextJSON);

export default richTextRenderer;
