import { Knex } from 'knex';

const tableName = 'users';

export async function up(knex: Knex): Promise<void> {
    await knex.schema.dropTableIfExists(tableName);
    await knex.schema.createTable(tableName, (column) => {
        column.increments('user_id').index();
        column.string('user_uuid', 36);
        column.string('user_username');
        column.string('user_password');
    });
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTableIfExists(tableName);
}
