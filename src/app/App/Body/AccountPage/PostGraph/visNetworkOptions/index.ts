import manipulation from './manipulation';

export default {
  manipulation,
  nodes: {
    shape: 'text',
  },
  edges: {
    color: {
      color: '#d9d9d9',
      highlight: '#d0d0d0',
    },
  },
  layout: {
    hierarchical: {
      enabled: true,
      direction: 'UD',
      sortMethod: 'directed',
    },
  },
};
