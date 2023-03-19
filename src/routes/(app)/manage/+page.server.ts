import { fetchData } from '$lib/requests/common';
import type { Collection, Comic, Editor, Serie, Author } from '$lib/types/Comic';
import type { PageServerLoad, Actions, RequestEvent } from './$types';

import { removeEditorFormAction } from '$lib/requests/editor';
import { removeSeriesFormAction } from '$lib/requests/series';
import { removeCollectionFormAction } from '$lib/requests/collection';
import { removeAuthorFormAction } from '$lib/requests/author';

export const actions = {
	remove_editor: async ({ request, locals }: RequestEvent) => {
		// Removes an editor entry.
		return await removeEditorFormAction(await request.formData(), locals.token);
	},
	remove_collection: async ({ request, locals }: RequestEvent) => {
		// Removes a collection entry.
		return await removeCollectionFormAction(await request.formData(), locals.token);
	},
	remove_series: async ({ request, locals }: RequestEvent) => {
		// Removes a series entry.
		return await removeSeriesFormAction(await request.formData(), locals.token);
	},
	remove_author: async ({ request, locals }: RequestEvent) => {
		// Removes an author entry.
		return await removeAuthorFormAction(await request.formData(), locals.token);
	}
} satisfies Actions;

export const load: PageServerLoad = async ({ locals }) => {
	const editors: Editor[] = await fetchData('/editors/', locals.token);
	const collections: Collection[] = await fetchData('/collections/', locals.token);
	const series: Serie[] = await fetchData('/series/', locals.token);
	const authors: Author[] = await fetchData('/authors/', locals.token);
	const comics: Comic[] = await fetchData('/comics/', locals.token);

	return { editors, collections, series, authors, comics };
};
