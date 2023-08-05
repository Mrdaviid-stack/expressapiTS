import { Model } from 'objection';
import { Users } from '../../typings/index';

class UsersModel extends Model {
    static get tableName() {
        return 'users';
    }

    static async findByIdentity(identity: string): Promise<Users> {
        const result = await this.query()
            .findOne({ user_username: identity })
            .first();
        return Promise.resolve({
            id: result['user_id'],
            username: result['user_username'],
            password: result['user_password'],
        });
    }
}

export default UsersModel;
