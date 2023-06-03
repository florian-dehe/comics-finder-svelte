import prisma from '$lib/prisma';
import { fail } from '@sveltejs/kit';

export const newSeriesFormAction = async (formData: FormData) => {
	const seriesName = formData.get('series_name');
	const collectionId = formData.get('collection_id');

	if (!seriesName || !collectionId || typeof seriesName != 'string') {
		return fail(400, { seriesError: true });
	}

	await prisma.series.create({
		data: {
			name: String(seriesName),
			collection: {
				connect: {
					id: Number(collectionId)
				}
			}
		}
	});

	return { seriesSuccess: true };
};

export const removeSeriesFormAction = async (formData: FormData) => {
	const seriesId = formData.get('id');
	if (!seriesId) {
		return fail(400, { seriesError: true });
	}

	await prisma.series.delete({
		where: { id: Number(seriesId) }
	});

	return { seriesSuccess: true };
};
