import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import UsersModel from '../users/users.model';

import { Conflic } from '../../app/errors/error-handler'

import { Token } from '../../typings/index'

class AuthService {

    static async signIn(identity: string, password: string): Promise<Token> {

        if (identity !== 'admin')
            throw new Conflic();

        if (password !== 'sa')
            throw new Conflic;

        const token = jwt.sign(
            { user_id: 1 },
            process.env.SECRET_TOKEN,
            {
                expiresIn: "1h",
            }
        )

        return Promise.resolve({ token: token })
    }

}

export default AuthService