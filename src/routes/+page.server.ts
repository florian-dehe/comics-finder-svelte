import { fetchData } from "$lib/requests/common";

/** @type {import('./$types').PageLoad} */
export async function load() {
    const comics = await fetchData(`/comics/`);
    return { comics }
}