import { removeComicFormAction } from '$lib/requests/comic';
import type { Comic } from '$lib/types/Comic';
import prisma from '$lib/prisma.ts';
import type { PageServerLoad, Actions, RequestEvent } from './$types';

export const actions = {
	delete_comic: async ({ request, locals }: RequestEvent) => {
		// Removes the comic.
		return await removeComicFormAction(await request.formData(), locals.token);
	}
} satisfies Actions;

export const load: PageServerLoad = async ({ params }: RequestEvent) => {
	const comic: Comic = await prisma.comic.findUnique({
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
	return { comic };
};
