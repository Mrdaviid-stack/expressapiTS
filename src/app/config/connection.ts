import { Model } from 'objection';
import Knex from 'knex';
import knexfile from '../database/knexfile';

export default Knex(knexfile[process.env.NODE_ENV]);
