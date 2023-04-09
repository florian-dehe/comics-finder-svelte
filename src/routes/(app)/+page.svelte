<script>
	/** @type {import('./$types').PageData} */
	export let data;

	import ComicCard from '$lib/components/ComicCard.svelte';
</script>

<div
	class="p-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:flex 2xl:flex-row 2xl:flex-wrap 2xl:gap-4 2xl:"
>
	{#each data.comics as comic}
		<ComicCard data={comic} />
	{/each}
</div>
