import { migrate } from "drizzle-orm/better-sqlite3/migrator";
import { connection, db } from "./connection";

await migrate(db, { migrationsFolder: "drizzle" });
await connection.close();
