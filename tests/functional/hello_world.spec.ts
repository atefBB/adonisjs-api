import { test as it } from "@japa/runner";

it("display welcome page", async ({ client }) => {
    const response = await client.get("/");

    response.assertStatus(200);
    response.assertTextIncludes("Hello world");
});
