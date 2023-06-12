// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PostsController {
    public async show({ response }) {
        return response.json({
            error: false,
            data: ["a nice post", "a long post"],
        });
    }
}
