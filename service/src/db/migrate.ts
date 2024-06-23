import { migrate } from "drizzle-orm/libsql/migrator";
import { client, db } from ".";

await migrate(db, { migrationsFolder: "drizzle" });
await client.close();
