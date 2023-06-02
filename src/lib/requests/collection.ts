import { fail } from '@sveltejs/kit';
import { makePost } from './common';

export const newCollectionFormAction = async function (formData: FormData, token: string) {
	const dataToSend = {
		name: formData.get('collection_name'),
		editor: formData.get('editor_id')
	};

	const res = await makePost('/collections/', dataToSend, token);

	if (res.status != 201) {
		return fail(res.status, { collectionError: true });
	} else {
		return { collectionSuccess: true };
	}
};

