import fastify from "fastify";
import z from "zod";
import { createGoal } from "../usecases/create-goal";

const app = fastify()

// Rotas
app.post('/goals', async (req) => {
    const createGoalSchema = z.object({
        title: z.string(),
        desiredWeeklyFrequency: z.number().int().min(1).max(7),
    })

    const body = createGoalSchema.parse(req.body)

    await createGoal({
        title: body.title,
        desiredWeeklyFrequency: body.desiredWeeklyFrequency,
    })
})

app.listen({
    port: 3333,
}).then(() => {
    console.log('HTTP server running!');

})  