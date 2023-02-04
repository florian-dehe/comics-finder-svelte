import type { Comic } from "$lib/types/Comic";

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
    const res = await fetch(`http://localhost:8000/api/comics/${params.id}`);
    const comic : Comic = await res.json();
    return { comic }
}