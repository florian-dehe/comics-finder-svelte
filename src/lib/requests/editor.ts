import { fail } from "@sveltejs/kit";
import { makeDelete, makePost } from "./common";
import { editorSuccess } from "./form_results";

export const newEditorFormAction = async function(formData: FormData, token: string) {
    const dataToSend = {
        'name': formData.get('editor_name')
    };

    const res = await makePost('/editors/', dataToSend, token);

    if (res.status != 201) {
        return fail(res.status, { editorError: true })
    }
    else {
        return editorSuccess();
    }
}

export const removeEditorFormAction = async (formData: FormData, token: string) => {
    const res = await makeDelete(`/editors/${formData.get('id')}/`, token);

    if (res.status != 204) {
        return fail(res.status, { editorError: true })
    }
    else {
        return editorSuccess();
    }
}