// API routes used to pull data
const prefix = 'https://nalda.herokuapp.com/api';

// Export each route as a constant
export const homePath = `${prefix}/home`;
export const rootPath = `${prefix}/`;
export const listingPath = id => `${prefix}/listings/${id}`;
export const categoryPath = category => `${prefix}/listings/categories/${category}`;
