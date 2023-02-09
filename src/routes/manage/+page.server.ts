import { fetchData } from "$lib/requests/common";
import type { Collection, Comic, Editor, Serie } from "$lib/types/Comic";

/** @type {import('./$types').PageLoad} */
export async function load() {
    const editors: Editor[] = await fetchData('/editors/');
    const collections: Collection[] = await fetchData('/collections/');
    const series: Serie[] = await fetchData('/series/');
    const comics: Comic[] = await fetchData('/comics/')

    return { editors, collections, series, comics }
}