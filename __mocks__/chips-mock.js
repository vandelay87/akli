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
    category: 'Technology',
  },
  {
    id: '2',
    value: 'Vue',
    link: 'https://vuejs.org/',
    category: 'Technology',
  },
  {
    id: '3',
    value: 'Angular',
    link: 'https://angular.io/',
    category: 'Technology',
  },
  {
    id: '4',
    value: 'Gatsby',
    link: 'https://www.gatsbyjs.org/',
    category: 'Technology',
  },
]
