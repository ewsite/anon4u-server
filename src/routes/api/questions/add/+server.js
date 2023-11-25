import { Database } from '$lib/Database';
import { json } from '@sveltejs/kit';
/** @type {import('./$types').RequestHandler} */
export async function POST({ request, url }) {
	const data = await request.json();

	const responseData = await Database.questions.create({
		data: { userId: String(data?.from), question: String(data?.question) },
		select: { id: true }
	});

	return json({
		questionId: responseData.id,
		link: `${url.protocol}//plzanswer.vercel.app/ehe/${responseData?.id}`,
		// link: `${url.protocol}//${url.hostname}/ehe/${responseData?.id}`,
	});
}
