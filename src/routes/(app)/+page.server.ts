import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const comics = await prisma.comic.findMany({
		include: { series: true, authors: true }
	});
	return { comics };
};
