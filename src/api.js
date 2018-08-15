// API routes used to pull data
const prefix = 'https://nalda.herokuapp.com/api';

const getURL = (path = '') => (`${prefix}/${path}`);

// Export each route as a constant
export const homePath = getURL('home');
export const rootPath = getURL('');
export const listingPath = id => getURL(`listings/${id}`);
export const listingsPath = getURL('listings');
export const categoryPath = category => getURL(`listings/categories/${category}`);
export const articlesPath = getURL('articles');
