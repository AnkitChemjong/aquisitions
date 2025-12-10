import 'dotenv/config';
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './models/schema.js';

const sql = neon(process.env.DATABASE_URL);
const db = drizzle(sql,{schema});

export { db, sql };
