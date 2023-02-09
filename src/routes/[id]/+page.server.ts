import { fetchData } from "$lib/requests/common";
import type { Comic } from "$lib/types/Comic";
import type { RequestEvent } from "./$types";

/** @type {import('./$types').PageLoad} */
export async function load({ params }: RequestEvent) {
    const comic: Comic = await fetchData(`/comics/${params.id}`);
    return { comic }
}