import prisma from '$lib/prisma';
import { fail } from '@sveltejs/kit';

export const newEditorFormAction = async (formData: FormData) => {
	const name = formData.get('editor_name');
	if (!name || typeof name != 'string') {
		return fail(400, { editorError: true });
	}
	await prisma.editor.create({
		data: {
			name: String(name)
		}
	});

	return { editorSuccess: true };
};

export const removeEditorFormAction = async (formData: FormData) => {
	const editorId = formData.get('id');
	if (!editorId) {
		return fail(400, { editorError: true });
	}

	await prisma.editor.delete({ where: { id: Number(editorId) } });

	return { editorSuccess: true };
};
