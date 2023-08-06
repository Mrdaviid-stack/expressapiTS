import { Model } from 'objection';
import { UsersModelInterface, UsersInfo } from '../../typings/interface/index';

class UsersModel extends Model implements UsersModelInterface {
    user_id: number;
    user_username: string;
    user_password: string;

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
