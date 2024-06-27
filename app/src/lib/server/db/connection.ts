import { drizzle } from 'drizzle-orm/bun-sqlite';
import { Database } from 'bun:sqlite';

export const connection = new Database('sqlite.db');
export const db = drizzle(connection);


export type Drizzle = typeof db;

