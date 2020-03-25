// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions'

export const chipsWithActionMock = [
  {
    id: '1',
    value: 'Small',
    action: action('small-click'),
  },
  {
    id: '2',
    value: 'Medium',
    action: action('medium-click'),
  },
  {
    id: '3',
    value: 'Large',
    action: action('large-click'),
  },
]

export const chipsWithLinkMock = [
  {
    id: '1',
    value: 'React.js',
    link: 'https://reactjs.org/',
  },
  {
    id: '2',
    value: 'Vue',
    link: 'https://vuejs.org/',
  },
  {
    id: '3',
    value: 'Angular',
    link: 'https://angular.io/',
  },
  {
    id: '4',
    value: 'Gatsby',
    link: 'https://www.gatsbyjs.org/',
  },
]
