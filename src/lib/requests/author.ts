import { fail } from '@sveltejs/kit';
import { makePost } from './common';

export const newAuthorFormAction = async function (formData: FormData, token: string) {
	const dataToSend = {
		name: formData.get('author_name')
	};

	const res = await makePost('/authors/', dataToSend, token);

	if (res.status != 201) {
		return fail(res.status, { authorError: true });
	} else {
		return { authorSuccess: true };
	}
};

