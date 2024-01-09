import { Router } from 'express'
import { login, register } from '../app/controllers/auth.controller.js';
const router = Router();

router.post( '/login', login );
router.post( '/register', register );

export const authRouter = router;