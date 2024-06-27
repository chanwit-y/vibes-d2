import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/lib/server/db/schema",
  out: "./drizzle",
  dialect: "sqlite", // 'postgresql' | 'mysql' | 'sqlite'
  dbCredentials: {
    url: "./sqlite.db",
  },
  //   dbCredentials: {
  //     host: process.env.DB_HOST,
  //     user: process.env.DB_USER,
  //     password: process.env.DB_PASSWORD,
  //     database: process.env.DB_NAME,
  //   },
});
