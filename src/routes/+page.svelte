<script>
    /** @type {import('./$types').PageData} */
    export let data;

    import ComicCard from './ComicCard.svelte'
</script>

<div>
    {#each data.comics as comic}
        <ComicCard data={comic} />
    {/each}
</div>