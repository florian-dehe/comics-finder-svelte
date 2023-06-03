import prisma from '$lib/prisma';
import type { Author, Collection, Comic, Editor, Series } from '@prisma/client';
import type { PageServerLoad, Actions, RequestEvent } from './$types';

export const actions = {
	delete_comic: async ({ request }: RequestEvent) => {
		// Removes the comic.
		const id = (await request.formData()).get('id');
		if (id) {
			await prisma.comic.delete({
				where: { isbn: Number(id) }
			});
			return { comicSuccess: true };
		}
		return { comicError: true };
	}
} satisfies Actions;

type ComicDetails = Comic & { series: Series & { collection: Collection & { editor: Editor } } };

export const load: PageServerLoad = async ({ params }: RequestEvent) => {
	const comic: ComicDetails | null = await prisma.comic.findUnique({
		where: {
			isbn: parseInt(params.id)
		},
		include: {
			series: {
				include: {
					collection: {
						include: {
							editor: true
						}
					}
				}
			},
			authors: true
		}
	});
	const authors: Author[] | null = await prisma.author.findMany({
		where: {
			Comic: {
				some: {
					isbn: parseInt(params.id)
				}
			}
		}
	});
	return { comic, authors };
};
