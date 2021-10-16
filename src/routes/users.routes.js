import express from 'express';
const router = express.Router();

import { signInUser } from '../services/users.service.js';

router.get('/signin', (req, resp, next) => {
  signInUser(resp.locals.userData)
  .then(user => resp.json(user))
  .catch(next)
});

export default router;
