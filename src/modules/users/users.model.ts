import { Model } from 'objection';

class UsersModel extends Model {
    static get tableName() {
        return 'users'
    }

}

export default UsersModel;