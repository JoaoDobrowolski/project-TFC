import { Request, Response, NextFunction } from 'express';
import { JwtPayload, verify } from 'jsonwebtoken';
import User from '../database/models/UserModel';

interface requestUser extends Request { user?: User }

export default class TokenValidation {
  static async validateToken(req: requestUser, res: Response, next: NextFunction) {
    try {
      const { authorization } = req.headers;
      if (authorization) {
        const { data } = verify(authorization, process.env.JWT_SECRET as string) as JwtPayload;
        req.user = data;
      }
    } catch (_error) {
      return res.status(401).json({ message: 'Token must be a valid token' });
    }

    next();
  }
}
