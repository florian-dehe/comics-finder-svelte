import { fetchData } from '$lib/requests/common';
import type { Author, Collection, Editor, Serie } from '$lib/types/Comic';
import type { PageServerLoad, RequestEvent, Actions } from './$types';

import { newCollectionFormAction } from '$lib/requests/collection';
import { newComicFormAction } from '$lib/requests/comic';
import { newEditorFormAction } from '$lib/requests/editor';
import { newSeriesFormAction } from '$lib/requests/series';
import { newAuthorFormAction } from '$lib/requests/author';

export const actions = {
	add: async ({ request, locals }: RequestEvent) => {
		// Creates a new comic entry.
		return await newComicFormAction(await request.formData(), locals.token);
	},
	new_editor: async ({ request, locals }: RequestEvent) => {
		// Creates a new editor entry.
		return await newEditorFormAction(await request.formData(), locals.token);
	},
	new_collection: async ({ request, locals }: RequestEvent) => {
		// Creates a new collection entry.
		return await newCollectionFormAction(await request.formData(), locals.token);
	},
	new_series: async ({ request, locals }: RequestEvent) => {
		// Creates a new series entry.
		return await newSeriesFormAction(await request.formData(), locals.token);
	},
	new_author: async ({ request, locals }: RequestEvent) => {
		// Creates a new author entry.
		return await newAuthorFormAction(await request.formData(), locals.token);
	}
} satisfies Actions;

export const load: PageServerLoad = async ({ locals }) => {
	const editors: Editor[] = await fetchData('/editors/', locals.token);
	const collections: Collection[] = await fetchData('/collections/', locals.token);
	const series: Serie[] = await fetchData('/series/', locals.token);
	const authors: Author[] = await fetchData('/authors/', locals.token);

	return { editors, collections, series, authors };
};
