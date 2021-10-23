// constants
import ROUTES_ROLES from '../constants/routes-roles.contants.js'

const validateAccess = (req, resp, next) => {
  let url = req.url.split('/api')[1].split('/').slice(0,3).join('/');
  const userData = resp.locals.userData;
  const role = userData?.role ? '';
  const routesRoles = ROUTES_ROLES[url];
  const hasAccess = routesRoles && routesRoles.includes(role);
  if (hasAccess) {
    next();
  } else {
    resp.status(403).json({ error: 'No puedes acceder a este recurso'});
  }
};

export default validateAccess;