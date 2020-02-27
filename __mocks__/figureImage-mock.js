export const basicImage = {
  file: {
    url: 'https://via.placeholder.com/400x225',
  },
  description: 'An image.'
};

export const imageWithSize = {
  file: {
    url: 'https://via.placeholder.com/400x225',
    details: {
      image: {
        width: 400,
        height: 225
      }
    }
  },
  description: 'An image.'
};

export const fluidImage = {
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
};