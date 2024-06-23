import { Elysia, t } from "elysia";
import cookie from "@elysiajs/cookie";
import { randomUUID } from "crypto";
import { basicAuthModel, jwtAccessSetup, jwtRefreshSetup } from "./setup";
import { db } from "../../db";
import { refreshTokensTable, usersTable } from "../../db/schema";
import { eq } from "drizzle-orm";

export const register = new Elysia()
  .use(basicAuthModel)
  .use(cookie())
  .use(jwtAccessSetup)
  .use(jwtRefreshSetup)
  .post(
    "/register",
    async function handler({
      body,
      set,
      jwtAccess,
      jwtRefresh,
      cookie: { refresh_token },
    }) {
      const existingUser = await db
        .select()
        .from(usersTable)
        .where(eq(usersTable.email, body.email))
        .get();

      if (existingUser) {
        set.status = 400;
        return {
          message: "Email already in use.",
        };
      }
      const savedPassword = await Bun.password.hash(body.password);
      const refreshId = randomUUID();
      const refreshToken = await jwtRefresh.sign({
        id: refreshId,
      });
      const hashedToken = new Bun.CryptoHasher("sha512")
        .update(refreshToken)
        .digest("hex");

      let accessToken = "";
      await db.transaction(async (tx) => {
        const user = await tx
          .insert(usersTable)
          .values({
            email: body.email,
            username: body.email,
            password: savedPassword,
          })
          .returning();

        accessToken = await jwtAccess.sign({
          id: String(user[0].id),
        });

        tx.insert(refreshTokensTable).values({
          id: refreshId,
          userId: user[0].id,
          hashedToken: hashedToken,
        }).execute();

        refresh_token.set({
          httpOnly: true,
          maxAge: 7 * 86400,
        });
      });
   
      return {
        accessToken,
      };
    },
    {
      body: "basicAuthModel",
    }
  );
