import { Database } from "$lib/Database";
import { json } from "@sveltejs/kit";

/** @type {import('./$types').RequestHandler} */
export async function GET({ params }) {
    
    const data = await Database.questions.findUnique({
        where: { id: params.questionId }
    })

    return json(data);
}