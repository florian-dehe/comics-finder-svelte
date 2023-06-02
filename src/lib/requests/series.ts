import { fail } from '@sveltejs/kit';
import { makePost } from './common';

export const newSeriesFormAction = async function (formData: FormData, token: string) {
	const dataToSend = {
		name: formData.get('series_name'),
		collection: formData.get('collection_id')
	};

	const res = await makePost('/series/', dataToSend, token);

	if (res.status != 201) {
		return fail(res.status, { seriesError: true });
	} else {
		return { seriesSuccess: true };
	}
};

