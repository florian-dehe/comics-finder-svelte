import { fail } from "@sveltejs/kit";
import { makePost, makeDelete } from "./common";
import { collectionSuccess } from "./form_results";


export const newCollectionFormAction = async function (formData: FormData, token: string) {
    const dataToSend = {
        'name': formData.get('collection_name'),
        'editor': formData.get('editor_id')
    }

    const res = await makePost('/collections/', dataToSend, token);
    
    if (res.status != 201) {
        return fail(res.status, { collectionError: true });
    }
    else {
        return collectionSuccess();
    }
};

export const removeCollectionFormAction = async (formData: FormData, token: string) => {
    const res = await makeDelete(`/collections/${formData.get('id')}/`, token);

    if (res.status != 204) {
        return fail(res.status, { collectionError: true })
    }
    else {
        return collectionSuccess();
    }
}