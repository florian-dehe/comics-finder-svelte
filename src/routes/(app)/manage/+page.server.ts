import { fetchData } from "$lib/requests/common";
import type { Collection, Comic, Editor, Serie } from "$lib/types/Comic";
import type { PageServerLoad } from "./$types";


export const load: PageServerLoad = async ({ locals }) => {
    const editors: Editor[] = await fetchData('/editors/', locals.token);
    const collections: Collection[] = await fetchData('/collections/', locals.token);
    const series: Serie[] = await fetchData('/series/', locals.token);
    const comics: Comic[] = await fetchData('/comics/', locals.token)

    return { editors, collections, series, comics }
}