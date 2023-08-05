import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import UsersModel from '../users/users.model';

import { Conflict } from '../../app/errors/error-handler';

import { Token, Users } from '../../typings/index';

class AuthService {
    static async signIn(identity: string, password: string): Promise<Token> {
        let user = await UsersModel.findByIdentity(identity);

        if (!user) throw new Conflict();

        let match = await bcrypt.compare(password, user.password);

        if (!match) throw new Conflict();

        const token = jwt.sign(
            { user_id: user.id, username: user.username },
            process.env.SECRET_TOKEN,
            {
                expiresIn: '1h',
            }
        );

        return Promise.resolve({ token: token });
    }
}

export default AuthService;
