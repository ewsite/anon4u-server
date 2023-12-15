import { Database } from '$lib/Database';
import { json } from '@sveltejs/kit';
/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
    const data = await request.json();
    
    const result = await Database.answers.create({
        data: { questionId: data.questionId, answer: data.answer },
        select: { id: true }
    })

    return json({ success: result.id ? true : false })
}