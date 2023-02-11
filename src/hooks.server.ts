import type { Handle } from "@sveltejs/kit";

const LOGIN_PATH_NAME = '/login';

export const handle = (async ({ event, resolve }) => {
	// get cookies from browser
	const session = event.cookies.get('session');

	if (!session) {
		if (event.url.pathname != LOGIN_PATH_NAME) {
			// if there is no session redirect to login
			return Response.redirect(`${event.url.origin}` + LOGIN_PATH_NAME, 302);
		}
		else {
			// We are on login page without session !
			return await resolve(event);
		}
	}

	// if `session` exists set `events.local`
	event.locals.token = session

	// load page as normal
	return await resolve(event);
}) satisfies Handle;
