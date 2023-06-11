<script lang="ts">
	import ComicCard from '$lib/components/ComicCard.svelte';
	import type { PageData } from './$types';
	import { MehIcon } from 'svelte-feather-icons';

	export let data: PageData;
</script>

{#if data.comics.length == 0}
	<div class="flex justify-center items-center my-20">
		<div class="flex flex-col items-center gap-2">
			<MehIcon size="2x" />
			No comics data
		</div>
	</div>
{:else}
	<div
		class="p-3 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:flex 2xl:flex-row 2xl:flex-wrap"
	>
		{#each data.comics as comic}
			<ComicCard data={comic} />
		{/each}
	</div>
{/if}
