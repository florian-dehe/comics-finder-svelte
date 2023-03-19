import { fetchData } from '$lib/requests/common';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	const comics = await fetchData(`/comics/`, locals.token);
	return { comics };
};
