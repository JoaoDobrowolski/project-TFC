import { Router } from 'express';
import LoginAuth from '../middlewares/LoginAuth';
import LoginController from '../controllers/LoginController';

const loginRoute = Router();

const loginController = new LoginController();
const loginAuth = new LoginAuth();

loginRoute.post('/', loginAuth.loginValidation, loginController.loginAuth);

loginRoute.get('/validate', loginController.loginValidate);

export default loginRoute;
