import { fetchData } from "$lib/requests/common";
import type { Author, Collection, Editor, Serie } from "$lib/types/Comic";
import type { PageServerLoad, RequestEvent } from "./$types";

import { newCollectionFormAction } from "$lib/requests/new_collection";
import { newComicFormAction } from "$lib/requests/new_comic";
import { newEditorFormAction } from "$lib/requests/new_editor";
import { newSeriesFormAction } from "$lib/requests/new_series";
import { newAuthorFormAction } from "$lib/requests/new_author";

/** @type {import('./$types').Actions} */
export const actions = {
	add: async ({ request }: RequestEvent) => {
		// Creates a new comic entry.
        return await newComicFormAction(await request.formData());
    },
    new_editor: async ({ request }: RequestEvent) => {
        // Creates a new editor entry.
        return await newEditorFormAction(await request.formData());
    },
    new_collection: async ({ request }: RequestEvent) => {
        // Creates a new collection entry.
        return await newCollectionFormAction(await request.formData());
    },
    new_series: async ({ request }: RequestEvent) => {
        // Creates a new series entry.
        return await newSeriesFormAction(await request.formData());
    },
    new_author: async ({ request }: RequestEvent) => {
        // Creates a new author entry.
        return await newAuthorFormAction(await request.formData());
    },
};

/** @type {import('./$types').PageLoad} */
export const load: PageServerLoad = async ({ locals}) => {
    const editors : Editor[] = await fetchData('/editors/', locals.token);
    const collections : Collection[] = await fetchData('/collections/', locals.token);
    const series : Serie[] = await fetchData('/series/', locals.token);
    const authors: Author[] = await fetchData('/authors/', locals.token);

    return { editors, collections, series, authors }
}
