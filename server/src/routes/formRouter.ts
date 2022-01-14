import { Router } from "express";
import { login, getApi } from '../controllers/authController';
import { TokenValidation } from './../middlewares/validateToken';

const router: Router = Router();

router.post('/api', login);
router.get('/api', TokenValidation, getApi);

export default router;