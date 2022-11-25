import { Request, Response, NextFunction } from 'express';
import * as Bcrypt from 'bcryptjs';
import UserModel from '../database/models/UserModel';

export default class LoginAuth {
  public loginValidation = async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'All fields must be filled' });
    }

    const validEmail = await UserModel.findOne({ where: { email } });
    if (!validEmail) {
      return res.status(401).json({ message: 'Incorrect email or password' });
    }

    if (!Bcrypt.compareSync(password, validEmail?.password as string)) {
      return res.status(401).json({ message: 'Incorrect email or password' });
    }

    next();
  };
}
