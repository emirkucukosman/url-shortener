import { Router } from 'express'
import * as Controller from '../../controllers/url'
import * as Validator from '../../validation/url'

const router: Router = Router();

router.route('/s').post(Validator.validateShorten, Controller.shorten);
router.route('/r/:shortURL').get(Validator.validateRedirect, Controller.redirect);

export default router;