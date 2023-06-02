import type { Collection, Comic, Editor, Series, Author } from '@prisma/client';
import type { PageServerLoad, Actions, RequestEvent } from './$types';

import { removeEditorFormAction } from '$lib/requests/editor';
import { removeSeriesFormAction } from '$lib/requests/series';
import { removeCollectionFormAction } from '$lib/requests/collection';
import { removeAuthorFormAction } from '$lib/requests/author';
import prisma from '$lib/prisma';

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

export const load: PageServerLoad = async () => {
	const editors: Editor[] = await prisma.editor.findMany();
	const collections: Collection[] = await prisma.collection.findMany();
	const series: Series[] = await prisma.series.findMany();
	const authors: Author[] = await prisma.author.findMany({ include: { Comic: true } });
	const comics: Comic[] = await prisma.comic.findMany();

	console.log(authors);
	return { editors, collections, series, authors, comics };
};
