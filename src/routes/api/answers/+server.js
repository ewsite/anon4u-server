import { json } from '@sveltejs/kit';
import { Database } from '$lib/Database';
/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
	const data = await request.json();

	const answers = await Database.questions.findUnique({
		where: { id: String(data?.questionId) },
		select: { answers: true }
	});
	return json({ answers: answers?.answers });
}
