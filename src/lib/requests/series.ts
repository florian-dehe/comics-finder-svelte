import { fail } from '@sveltejs/kit';
import { makePost, makeDelete } from './common';
import { seriesSuccess } from './form_results';

export const newSeriesFormAction = async function (formData: FormData, token: string) {
	const dataToSend = {
		name: formData.get('series_name'),
		collection: formData.get('collection_id')
	};

	const res = await makePost('/series/', dataToSend, token);

	if (res.status != 201) {
		return fail(res.status, { seriesError: true });
	} else {
		return seriesSuccess();
	}
};

export const removeSeriesFormAction = async (formData: FormData, token: string) => {
	const res = await makeDelete(`/authors/${formData.get('id')}/`, token);

	if (res.status != 204) {
		return fail(res.status, { seriesError: true });
	} else {
		return seriesSuccess();
	}
};
