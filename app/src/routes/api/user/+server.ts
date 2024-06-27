// src/routes/[...slugs]/+server.ts
import { appInsQuery } from '$lib/server/api/app-insight/+server';
import { Elysia, t } from 'elysia';

const app = new Elysia({prefix: '/api/user'})
    .get('/', async () => {
         await appInsQuery('');
        return 'hello SvelteKit'
    })
    .post('/', ({ body }) => body, {
        body: t.Object({
            name: t.String()
        })
    })

type RequestHandler = (v: { request: Request }) => Response | Promise<Response>

export const GET: RequestHandler = ({ request }) => app.handle(request)
export const POST: RequestHandler = ({ request }) => app.handle(request)