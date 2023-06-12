/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from "@ioc:Adonis/Core/Route";
import Database from "@ioc:Adonis/Lucid/Database";

Route.get("/", () => {
    return "Hello world from a slim app";
});

Route.group(() => {
    Route.get("/", ({ response }) => {
        return response.json({
            error: false,
            message: "Hello world from the app",
        });
    });

    Route.get("/posts", "PostsController.show");

    Route.get("/users", async ({ response }) => {
        const users = await Database.query() // 👈 gives an instance of select query builder
            .from("cesaradmin.users")
            .select("*")
            .limit(10);
        return response.json({
            error: false,
            data: users,
        });
    });
}).prefix("/api/v1");
