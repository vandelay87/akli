import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import FigureImage from './figureImage'
import {
  imageWithoutCaption,
  imageWithCaption,
  imageWithContent,
} from './figureImage.stories'
import { fluidImage } from '../../../__mocks__/figureImage-mock'

describe('figureImage.js', () => {
  it('renders component', () => {
    const imageTree = renderer.create(imageWithoutCaption()).toJSON()
    const imageCaptionTree = renderer.create(imageWithCaption()).toJSON()
    const imageContentTree = renderer.create(imageWithContent()).toJSON()
    const imageFluidTree = shallow(<FigureImage image={fluidImage} />)

    expect(imageTree).toMatchSnapshot()
    expect(imageCaptionTree).toMatchSnapshot()
    expect(imageContentTree).toMatchSnapshot()
    expect(imageFluidTree).toMatchSnapshot()
  })
})
