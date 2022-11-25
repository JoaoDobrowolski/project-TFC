import * as jwt from 'jsonwebtoken';
import User from '../database/models/UserModel';
import 'dotenv/config';
import IUser from '../interfaces/LoginInterface';

const createToken = (data: IUser) => {
  const jwtAux = {
    secret: String(process.env.JWT_SECRET),
  };
  const token = jwt.sign({ data }, jwtAux.secret, {
    expiresIn: '15d',
    algorithm: 'HS256',
  });

  return token;
};

export default class LoginService {
  public LoginAuth = async (email: string) => {
    const userData = await User.findOne({ where: { email } });
    if (userData) {
      const { username } = userData;
      const token = createToken({ username });

      return token;
    }
  };

  static loginValidation = async (auth: string): Promise<string | null | jwt.JwtPayload> => {
    const roleValidation = jwt.decode(auth);

    return roleValidation;
  };
}
