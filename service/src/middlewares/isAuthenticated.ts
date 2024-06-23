import type { Elysia } from "elysia";
import { jwtAccessSetup } from "../routes/auth/setup";
import { db } from "../db";
import { usersTable } from "../db/schema";
import { eq } from "drizzle-orm";
import bearer from "@elysiajs/bearer";

export const isAuthenticated = (app: Elysia) =>
  app
    .use(jwtAccessSetup)
    .use(bearer())
    .derive(async function handler({
      jwtAccess,
      request: { headers },
      bearer,
    }) {
      const payload = await jwtAccess.verify(bearer);
      if (!payload) return {};

      const { id } = payload;
      const user = await db
        .select()
        .from(usersTable)
        .where(eq(usersTable.id, Number(id)))
        .get();
      if (!user) return {};

      return {
        user,
      };
    })
    .onBeforeHandle({ as: "global" }, ({ set, user }) => {
      if (!user) {
        set.status = 401;
        return {
          success: false,
          message: "Unauthorized",
          data: null,
        };
      }
    });
