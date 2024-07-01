/**
 * Express router paths go here.
 */


export default {
  Base: '/api',
  Items: {
    Base: '/items',
    Get: '/:id'
  }
} as const;
