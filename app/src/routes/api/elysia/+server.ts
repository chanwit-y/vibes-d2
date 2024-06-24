// import type { App } from '../../../../../server/src/index'
import type { NewPost } from '$types'

import { treaty } from '@elysiajs/eden';

/** @type {import('./$types').RequestHandler} */
export async function  GET() {
	// const client = treaty<NewPost>('localhost:3000') 

	// const response = await client.auth.register.post({email: "", password: ""})

	// console.log(response)


	return new Response(String(1));
	// return new Response(response.data?.message);

}