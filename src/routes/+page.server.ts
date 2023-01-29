/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
    const res = await fetch(`http://localhost:8000/api/comics/`);
    const comics = await res.json();
    return { comics }
}