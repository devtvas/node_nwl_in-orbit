import fastify from "fastify";
import { serializerCompiler, validatorCompiler, type ZodTypeProvider } from "fastify-type-provider-zod";
import z from "zod";
import { createGoal } from "../usecases/create-goal";

const app = fastify().withTypeProvider<ZodTypeProvider>()

// Add schema validator and serializer
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

// Rotas
app.post('/goals', {
    schema: {
        body: z.object({
            title: z.string(),
            desiredWeeklyFrequency: z.number().int().min(1).max(7),
        })
    }
}, async request => {

    const { title, desiredWeeklyFrequency } = request.body

    await createGoal({
        title,
        desiredWeeklyFrequency,
    })
})

app.listen({
    port: 3333,
}).then(() => {
    console.log('HTTP server running!');

})  