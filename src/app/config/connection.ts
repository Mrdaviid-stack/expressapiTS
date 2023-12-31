import { Model } from 'objection';
import Knex from 'knex';
import knexfile from '../database/knexfile';

const knex = Knex(knexfile[process.env.NODE_ENV])

Model.knex(knex);