import { fail } from "@sveltejs/kit";
import { makePost } from "./common";
import { authorSuccess } from "./form_results";

export const newAuthorFormAction = async function(formData: FormData) {
    const dataToSend = {
        'name': formData.get('author_name')
    };

    const res = await makePost('/authors/', dataToSend);

    if (res.status != 201) {
        return fail(res.status, { authorError: true })
    }
    else {
        return authorSuccess();
    }
}