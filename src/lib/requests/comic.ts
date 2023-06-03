import prisma from '$lib/prisma';
import { fail } from '@sveltejs/kit';
import type { ObjectOption } from 'svelte-multiselect';

export const newComicFormAction = async function (formData: FormData) {
	const comicIsbn = formData.get('isbn');
	const comicTitle = formData.get('title');
	const comicDescription = formData.get('description');
	const comicVolume = formData.get('volume');
	const comicReleaseDate = formData.get('release_date');
	const comicPages = formData.get('pages');
	const comicCoverUrl = formData.get('cover_url');

	const seriesId = formData.get('series');
	const authors = formData.get('authors');

	if (
		!comicIsbn ||
		!comicTitle ||
		!comicDescription ||
		!comicVolume ||
		!comicReleaseDate ||
		!comicPages ||
		!comicCoverUrl ||
		!seriesId ||
		!authors
	) {
		return fail(400, { error: true });
	}

	const authorsToConnect = JSON.parse(String(authors)).map((opt: ObjectOption) => opt.value);

	await prisma.comic.create({
		data: {
			isbn: Number(comicIsbn),
			title: String(comicTitle),
			description: String(comicDescription),
			volume: Number(comicVolume),
			releaseDate: new Date(String(comicReleaseDate)),
			pages: Number(comicPages),
			coverUrl: String(comicCoverUrl),
			series: {
				connect: {
					id: Number(seriesId)
				}
			},
			authors: {
				connect: authorsToConnect
			}
		}
	});

	return { success: true };
};
