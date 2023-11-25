
/** @type {import('@sveltejs/kit').Handle} */

export async function handle({ event, resolve }) {


    // event.locals.id = event.request.headers.get('Authorization')?.split('Bearer ')[1] ?? null;
    // event.request.headers.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
    // event.request.headers.append('Access-Control-Allow-Origin', '*');
    // event.request.headers.append('Access-Control-Allow-Headers', '*');
    return await resolve(event);
}
