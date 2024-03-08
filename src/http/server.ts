import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'
//Library used to for the structure of the poll
//For example with this library we can define the structure of the request.body, this way is required that it has a title
import { z } from 'zod'

const app = fastify();
const prisma = new PrismaClient();

app.post('/polls', async (request, reply) => {
    const createPollBody = z.object({
        title: z.string()
    })

    const { title } = createPollBody.parse(request.body);

    const poll = await prisma.poll.create({
        data: {
            title
        }
    })

    return reply.status(201).send({pollID: poll.id});
})

app.listen({ port: 3333 }).then(() => {
    console.log('HTTP server running!');
}
)
