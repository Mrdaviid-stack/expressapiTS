import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import Password from 'node-php-password';
import cryptJS from 'crypto-js';
import Base64 from 'crypto-js/enc-base64';

import UsersModel from '../users/users.model';

import { Conflict } from '../../app/errors/error-handler';

import { Token } from '../../typings/interface/index';

class AuthService {
    static async signIn(identity: string, password: string): Promise<Token> {
        let user = await UsersModel.findByIdentity(identity);

        if (!user) throw new Conflict();

        let match = await this.bcryptCompare(password, user.password)

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

    static async bcryptCompare(password: string, user_password: string): Promise<boolean> {
        const isMatch = await bcrypt.compare(password, user_password);
        return Promise.resolve(isMatch);
    }

    static async encryptPasswordToPHPHashing(password: string): Promise<string> {
        const hash = cryptJS.SHA384(password);
        const base = Base64.stringify(hash);

        const encrypted = Password.hash(base, "PASSWORD_DEFAULT", { cost: 10 });

        return Promise.resolve(encrypted);
    }

    static async verifiedPasswordPHPHashing(user_password: string, user_input: string): Promise<boolean> {
        const hash = cryptJS.SHA384(user_input);
        const base = Base64.stringify(hash);

        const password = Password.needsRehash(user_password, "PASSWORD_DEFAULT", { cost: 10 });

        if (password)
            user_password = Password.hash(user_password, "PASSWORD_DEFAULT", { cost: 10 });

        const compare = Password.verify(base, user_password);

        return Promise.resolve(compare);
    }
}

export default AuthService;
