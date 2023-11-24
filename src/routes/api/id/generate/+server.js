import { Database } from '$lib/Database';
import { json } from '@sveltejs/kit';
/** @type {import('./$types').RequestHandler} */
export async function GET() {
    
    console.log("Successfully created a stupidity");
    const questionData = await Database.user.create({
        data: { accept: true },
        select: { id: true }
    });

    return json(questionData);
}