import { Model } from 'objection';
import { UsersModelInterface, UsersInfo } from '../../typings/interface/index';

interface UsersModel extends UsersModelInterface {}

class UsersModel extends Model {
    static get tableName() {
        return 'users';
    }

    static async findByIdentity(identity: string): Promise<UsersInfo> {
        let result = await this.query()
            .findOne({ user_username: identity })
            .first();

        return Promise.resolve({
            id: result.user_id,
            username: result.user_username,
            password: result.user_password,
        });
    }
}

export default UsersModel;
