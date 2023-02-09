import { fail } from "@sveltejs/kit";
import { makePost } from "./common";
import { editorSuccess } from "./form_results";

export const newEditorFormAction = async function(formData: FormData) {
    const dataToSend = {
        'name': formData.get('editor_name')
    };

    const res = await makePost('/editors/', dataToSend);

    if (res.status != 201) {
        return fail(res.status, { editorError: true })
    }
    else {
        return editorSuccess();
    }
}