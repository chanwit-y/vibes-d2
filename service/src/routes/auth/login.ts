import { Elysia } from "elysia";
import { basicAuthModel, jwtAccessSetup, jwtRefreshSetup } from "./setup";
import { randomUUID } from "crypto";
import { db } from "../../db";
import { eq } from "drizzle-orm";
import { refreshTokensTable, usersTable } from "../../db/schema";

export const login = new Elysia()
  .use(basicAuthModel)
  .use(jwtAccessSetup)
  .use(jwtRefreshSetup)
  .post(
    "/login",
    async function handler({ body, set, jwtAccess, jwtRefresh }) {
      const existingUser = await db
        .select()
        .from(usersTable)
        .where(eq(usersTable.email, body.email))
        .get();

      if (!existingUser) {
        set.status = 403;
        return {
          message: "Invalid credentials.",
        };
      }
      const validPassword = await Bun.password.verify(
        body.password,
        existingUser.password
      );
      if (!validPassword) {
        set.status = 403;
        return {
          message: "Invalid credentials.",
        };
      }
      const refreshId = randomUUID();
      const refreshToken = await jwtRefresh.sign({
        id: refreshId,
      });
      const hashedToken = new Bun.CryptoHasher("sha512")
        .update(refreshToken)
        .digest("hex");

	await db.insert(refreshTokensTable).values({
          hashedToken,
          id: refreshId,
          userId: existingUser.id,
	})

      const accessToken = await jwtAccess.sign({
        id: String(existingUser.id),
      });
      return {
        accessToken,
      };
    },
    {
      body: "basicAuthModel",
    }
  );
