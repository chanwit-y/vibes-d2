import { sql } from "drizzle-orm";
import {
  text,
  integer,
  sqliteTable,
  uniqueIndex,
} from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
  id: text("id"),
  textModifiers: text("text_modifiers")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
  intModifiers: integer("int_modifiers", { mode: "boolean" })
    .notNull()
    .default(false),
    fullName: text('full_name'),
    phone: text('phone'),
});

export const countries = sqliteTable(
  "countries",
  {
    id: integer("id").primaryKey(),
    name: text("name"),
  },
  (countries) => ({
    nameIdx: uniqueIndex("nameIdx").on(countries.name),
  })
);
export const cities = sqliteTable("cities", {
  id: integer("id").primaryKey(),
  name: text("name"),
  countryId: integer("country_id").references(() => countries.id),
});

export const appInsights = sqliteTable("app_insights", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name"),
  appId: text("app_id"),
  appKey: text("app_key"),
  created: text("created").default(sql`CURRENT_TIMESTAMP`),
});

export type AppInsightsInsert = typeof appInsights.$inferInsert; 
export type AppInsightsSelect = typeof appInsights.$inferSelect; 