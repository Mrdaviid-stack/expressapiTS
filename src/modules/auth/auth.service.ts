import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import UsersModel from '../users/users.model';

import { Token } from '../../typings/index'

class AuthService {

    static async signIn(identity: string, password: string): Promise<Token> {

        const identity_exist = await UsersModel.query().findOne({ username: identity })

        if (! identity_exist) return

        const isMatch = await bcrypt.compare(identity_exist["username"], password);

        if (! isMatch) return

        return Promise.resolve({ token: 32434234 })
    }

}

export default AuthService