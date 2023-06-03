import prisma from '$lib/prisma';
import { fail } from '@sveltejs/kit';

export const newCollectionFormAction = async (formData: FormData) => {
	const collectionName = formData.get('collection_name');
	const editorId = formData.get('editor_id');

	if (!collectionName || !editorId || typeof collectionName != 'string') {
		return fail(400, { collectionError: true });
	}

	await prisma.collection.create({
		data: {
			name: String(collectionName),
			editor: {
				connect: {
					id: Number(editorId)
				}
			}
		}
	});

	return { collectionSuccess: true };
};

export const removeCollectionFormAction = async (formData: FormData) => {
	const collectionId = formData.get('id');
	if (!collectionId) {
		return fail(400, { collectionError: true });
	}

	await prisma.collection.delete({ where: { id: Number(collectionId) } });

	return { collectionSuccess: true };
};
