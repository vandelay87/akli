import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import FigureImage from './figureImage';
import { imageWithoutCaption, imageWithCaption, imageWithContent } from './figureImage.stories';

const fluidShapeMock = {
  file: {
    url: 'https://via.placeholder.com/400x225',
    details: {
      image: {
        width: 400,
        height: 225
      }
    }
  },
  fluid: {
    aspectRatio: 1.5,
    src: `test_image.jpg`,
    srcSet: `some srcSet`,
    sizes: `(max-width: 600px) 100vw, 600px`,
  },
  description: 'An image.'
}

describe('figureImage.js', () => {
  it('renders component', () => {
    const imageTree = renderer
      .create(imageWithoutCaption())
      .toJSON();
    const imageCaptionTree = renderer
      .create(imageWithCaption())
      .toJSON();
    const imageContentTree = renderer
      .create(imageWithContent())
      .toJSON();
    const imageFluidTree = shallow(<FigureImage image={fluidShapeMock} />);

    expect(imageTree).toMatchSnapshot();
    expect(imageCaptionTree).toMatchSnapshot();
    expect(imageContentTree).toMatchSnapshot();
    expect(imageFluidTree).toMatchSnapshot();
  });
});
