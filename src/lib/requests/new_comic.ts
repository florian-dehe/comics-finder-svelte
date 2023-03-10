import { fail } from "@sveltejs/kit";
import type { ObjectOption } from "svelte-multiselect";
import { makePost } from "./common";
import { comicSuccess } from "./form_results";

export const newComicFormAction =async function(formData: FormData, token: string) {

    const authors = formData.get('authors');
    let authorsToSend = []
    if (authors != null) {
        authorsToSend = JSON.parse(authors).map((opt: ObjectOption) => opt.value);
    }

    const dataToSend = {
        'title': formData.get('title'),
        'serie': formData.get('series'),
        'description': formData.get('description'),
        'volume': formData.get('volume'),
        'release_date': formData.get('release_date'),
        'pages': formData.get('pages'),
        'isbn': formData.get('isbn'),
        'cover_url': formData.get('cover_url'),
        'authors': authorsToSend
    }

    const res = await makePost('/comics/', dataToSend, token);

    if (res.status != 201) {
        return fail(res.status, { error: true });
    }
    else {
        return comicSuccess();
    }
}