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
