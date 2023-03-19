import { fetchData } from '$lib/requests/common';
import type { Comic } from '$lib/types/Comic';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, locals }) => {
	const comic: Comic = await fetchData(`/comics/${params.id}`, locals.token);
	return { comic };
};
