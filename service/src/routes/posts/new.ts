import Elysia from "elysia";
import { postModel } from "./setup";
import { isAuthenticated } from "../../middlewares/isAuthenticated";

// const plugin = new Elysia()
//   .use(isAuthenticated)
//   .onBeforeHandle({ as: "global" }, ({ user, message }) => {
//     if (!user) {
//       return { message };
//     }
//   });

export const newPost = new Elysia({
  prefix: "/posts",
})
  .use(postModel)
  .use(isAuthenticated)
  .guard((app) =>
    app.post("/", async ({ body, set, user }) => {
      console.log(user);
      console.log("Hi xx");
      set.status = 202;
      return {
        message: "post created",
      };
    })
  );

//eyJhbGciOiJIUzI1NiJ9.eyJpZCI6IjEiLCJleHAiOjE3MTg3ODcyNzN9.A33C6fnnZ6tvq5UUmrO72vBlrwf2CXgKnBoJNC6_Eo0