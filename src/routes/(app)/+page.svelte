<script>
	/** @type {import('./$types').PageData} */
	export let data;

	import ComicCard from '$lib/components/ComicCard.svelte';
</script>

<div class="flex flex-row mt-3">
	{#each data.comics as comic}
		<ComicCard data={comic} />
	{/each}
</div>
