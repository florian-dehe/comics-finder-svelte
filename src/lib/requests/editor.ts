import { fail } from '@sveltejs/kit';
import { makePost } from './common';

export const newEditorFormAction = async function (formData: FormData, token: string) {
	const dataToSend = {
		name: formData.get('editor_name')
	};

	const res = await makePost('/editors/', dataToSend, token);

	if (res.status != 201) {
		return fail(res.status, { editorError: true });
	} else {
		return { editorSuccess: true };
	}
};

