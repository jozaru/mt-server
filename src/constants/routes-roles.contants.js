import Roles from './roles.contants.js';

export default {
  '/users/signin': [Roles.user, Roles.admin],
  '/products': [Roles.admin],
  '/products/add': [Roles.admin],
  '/products/update': [Roles.admin],
  '/products/remove': [Roles.admin],
}