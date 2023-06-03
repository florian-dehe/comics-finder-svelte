import type { Author, Collection, Editor, Series } from '@prisma/client';
import type { PageServerLoad, RequestEvent, Actions } from './$types';

import { newCollectionFormAction } from '$lib/requests/collection';
import { newComicFormAction } from '$lib/requests/comic';
import { newEditorFormAction } from '$lib/requests/editor';
import { newSeriesFormAction } from '$lib/requests/series';
import { newAuthorFormAction } from '$lib/requests/author';
import prisma from '$lib/prisma';

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
	}
} satisfies Actions;

export const load: PageServerLoad = async () => {
	const editors: Editor[] = await prisma.editor.findMany();
	const collections: Collection[] = await prisma.collection.findMany();
	const series: Series[] = await prisma.series.findMany();
	const authors: Author[] = await prisma.author.findMany();

	return { editors, collections, series, authors };
};
