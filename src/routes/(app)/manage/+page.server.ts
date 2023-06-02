import type { Collection, Comic, Editor, Series, Author } from '@prisma/client';
import type { PageServerLoad, Actions, RequestEvent } from './$types';

import prisma from '$lib/prisma';

export const actions = {
	remove_editor: async ({ request }: RequestEvent) => {
		// Removes an editor entry.
		const id = (await request.formData()).get('id');
		if (id) {
			await prisma.editor.delete({
				where: { id: Number(id) }
			});
			return { editorSuccess: true };
		}
		return { editorError: true };
	},
	remove_collection: async ({ request }: RequestEvent) => {
		// Removes a collection entry.
		const id = (await request.formData()).get('id');
		if (id) {
			await prisma.collection.delete({
				where: { id: Number(id) }
			});
			return { collectionSuccess: true };
		}
		return { collectionError: true };
	},
	remove_series: async ({ request }: RequestEvent) => {
		// Removes a series entry.
		const id = (await request.formData()).get('id');
		if (id) {
			await prisma.series.delete({
				where: { id: Number(id) }
			});
			return { seriesSuccess: true };
		}
		return { seriesError: true };
	},
	remove_author: async ({ request }: RequestEvent) => {
		// Removes an author entry.
		const id = (await request.formData()).get('id');
		if (id) {
			await prisma.author.delete({
				where: { id: Number(id) }
			});
			return { authorSuccess: true };
		}
		return { authorError: true };
	}
} satisfies Actions;

export const load: PageServerLoad = async () => {
	const editors: Editor[] = await prisma.editor.findMany();
	const collections: Collection[] = await prisma.collection.findMany();
	const series: Series[] = await prisma.series.findMany();
	const authors: (Author & {Comic: Comic[]})[] = await prisma.author.findMany({ include: { Comic: true } });
	const comics: Comic[] = await prisma.comic.findMany();

	return { editors, collections, series, authors, comics };
};
