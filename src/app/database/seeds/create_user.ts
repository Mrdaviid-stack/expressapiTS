import { Knex } from 'knex';
import bcrypt from 'bcrypt';
import { UUID } from '../../helpers/common-helpers';

export async function seed(knex: Knex): Promise<void> {
    const hash = await bcrypt.hash('sa', Number(process.env.SALT_ROUND));
    // Deletes ALL existing entries
    await knex('users').del();

    // Inserts seed entries
    await knex('users').insert([
        {
            user_uuid: UUID(),
            user_username: 'admin',
            user_password: hash,
        },
    ]);
}
