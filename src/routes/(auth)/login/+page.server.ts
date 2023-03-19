import { fail, redirect } from '@sveltejs/kit';
import type { Action, Actions } from './$types';
import { SECRET_SESSION_COOKIE_SECURE } from '$env/static/private';

import { makeSimplePost } from '$lib/requests/common';

const login: Action = async ({ cookies, request }) => {
	const data = await request.formData();
	const username = data.get('username');
	const password = data.get('password');

	if (typeof username !== 'string' || typeof password !== 'string' || !username || !password) {
		return fail(400, { incorrect: true });
	}

	// Post request !
	const res = await makeSimplePost('/auth/login/', {
		username: username,
		password: password
	});

	if (res.status != 200) {
		return fail(400, { incorrect: true });
	}

	const resData = await res.json();

	cookies.set('authToken', resData.token, {
		// send cookie for every page
		path: '/',
		// server side only cookie so you can't use `document.cookie`
		httpOnly: true,
		// only requests from same site can send cookies
		// https://developer.mozilla.org/en-US/docs/Glossary/CSRF
		sameSite: 'strict',
		// only sent over HTTPS in production
		secure: SECRET_SESSION_COOKIE_SECURE,
		// set cookie to expire after a day
		maxAge: 60 * 60 * 24
	});

	// redirect the user
	throw redirect(302, '/');
};

export const actions: Actions = { login };
