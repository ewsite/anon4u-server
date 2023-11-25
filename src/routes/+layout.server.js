/** @type {import('./$types').LayoutServerLoad} */
export async function load({ url }) {
	return {
		url: `${url.protocol}//${url.host}${url.pathname}`,
		baseUrl: `${url.protocol}//${url.host}`
	};
}
