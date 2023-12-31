import { Database } from '$lib/Database';
import { fail } from '@sveltejs/kit';
/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const questionData = await Database.questions.findUnique({
		where: { id: String(params?.questionId) }
	});

	return {
		questionData: questionData
	};
}

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {
		const requestData = Object.fromEntries(await request.formData());

		const result = await Database.answers.create({
			data: { questionId: String(requestData?.questionId), answer: String(requestData?.answer) },
			select: { id: true }
		});

		if (!result?.id) {
			return fail(400, {
				success: false
			});
		}

		return {
			success: true
		};
	}
};
