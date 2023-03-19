import { fail } from "@sveltejs/kit";
import { makePost, makeDelete } from "./common";
import { authorSuccess } from "./form_results";

export const newAuthorFormAction = async function(formData: FormData, token: string) {
    const dataToSend = {
        'name': formData.get('author_name')
    };

    const res = await makePost('/authors/', dataToSend, token);

    if (res.status != 201) {
        return fail(res.status, { authorError: true })
    }
    else {
        return authorSuccess();
    }
}

export const removeAuthorFormAction = async (formData: FormData, token: string) => {
    const res = await makeDelete(`/authors/${formData.get('id')}/`, token);

    if (res.status != 204) {
        return fail(res.status, { authorError: true })
    }
    else {
        return authorSuccess();
    }
}