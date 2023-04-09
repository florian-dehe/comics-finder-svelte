import { removeComicFormAction } from '$lib/requests/comic';
import { fetchData } from '$lib/requests/common';
import type { Comic } from '$lib/types/Comic';
import type { PageServerLoad, Actions, RequestEvent } from './$types';

export const actions = {
	delete_comic: async ({ request, locals }: RequestEvent) => {
		// Removes the comic.
		return await removeComicFormAction(await request.formData(), locals.token);
	}
} satisfies Actions;

export const load: PageServerLoad = async ({ params, locals }) => {
	const comic: Comic = await fetchData(`/comics/${params.id}`, locals.token);
	return { comic };
};
