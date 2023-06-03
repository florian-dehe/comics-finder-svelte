import type { Collection, Comic, Editor, Series, Author } from '@prisma/client';
import type { PageServerLoad, Actions, RequestEvent } from './$types';

import prisma from '$lib/prisma';
import { removeEditorFormAction } from '$lib/requests/editor';
import { removeCollectionFormAction } from '$lib/requests/collection';
import { removeSeriesFormAction } from '$lib/requests/series';
import { removeAuthorFormAction } from '$lib/requests/author';

export const actions = {
	remove_editor: async ({ request }: RequestEvent) => {
		// Removes an editor entry.
		return await removeEditorFormAction(await request.formData());
	},
	remove_collection: async ({ request }: RequestEvent) => {
		// Removes a collection entry.
		return await removeCollectionFormAction(await request.formData());
	},
	remove_series: async ({ request }: RequestEvent) => {
		// Removes a series entry.
		return await removeSeriesFormAction(await request.formData());
	},
	remove_author: async ({ request }: RequestEvent) => {
		// Removes an author entry.
		return await removeAuthorFormAction(await request.formData());
	}
} satisfies Actions;

export const load: PageServerLoad = async () => {
	const editors: Editor[] = await prisma.editor.findMany();
	const collections: Collection[] = await prisma.collection.findMany();
	const series: Series[] = await prisma.series.findMany();
	const authors: (Author & { Comic: Comic[] })[] = await prisma.author.findMany({
		include: { Comic: true }
	});
	const comics: Comic[] = await prisma.comic.findMany();

	return { editors, collections, series, authors, comics };
};
