import { Request, Response } from 'express';
// import User from '../database/models/UserModel';
import LoginService from '../services/LoginService';

export default class LoginController {
  public loginAuth = async (req: Request, res: Response) => {
    const loginService = new LoginService();
    const { email } = req.body;

    const userFound = await loginService.LoginAuth(email);

    if (!userFound) {
      return res.status(404).json({ message: 'User not found' });
    }

    const token = await loginService.LoginAuth(email);

    res.status(200).json({ token });
  };

  public loginValidate = async (req: Request, res: Response) => {
    const { authorization } = req.headers;

    if (typeof authorization !== 'string') {
      res.status(401).json({ message: 'Invalid Token' });
    } else {
      const role = await LoginService.loginValidation(authorization);

      if (!role) {
        res.status(401).json({ message: 'Invalid Token' });
      }

      res.status(200).json({ role: 'admin' });
    }
  };
}
