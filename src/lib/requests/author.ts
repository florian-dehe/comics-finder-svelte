import prisma from '$lib/prisma';
import { fail } from '@sveltejs/kit';

export const newAuthorFormAction = async (formData: FormData) => {
	const authorName = formData.get('author_name');

	if (!authorName || typeof authorName != 'string') {
		return fail(400, { authorError: true });
	}

	await prisma.author.create({
		data: {
			name: authorName
		}
	});

	return { authorSuccess: true };
};

export const removeAuthorFormAction = async (formData: FormData) => {
	const authorId = formData.get('id');
	if (!authorId) {
		return fail(400, { authorError: true });
	}

	await prisma.author.delete({ where: { id: Number(authorId) } });

	return { authorSuccess: true };
};
