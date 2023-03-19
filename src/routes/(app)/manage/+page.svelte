<script lang="ts">
	import ManagedElement from '$lib/components/ManagedElement.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="mt-5 max-w-lg mx-auto">
	<h2 class="text-2xl font-bold text-center my-4">Manage library</h2>

	<div class="flex flex-col gap-y-3">
		<!-- Editors -->
		<div class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
			<input type="checkbox" />
			<div class="collapse-title text-xl font-bold">Editor</div>
			<div class="collapse-content px-2">
				<div class="flex flex-col gap-y-1">
					{#each data.editors as editor}
						<ManagedElement
							elementData={editor}
							contains={data.collections.filter((col) => col.editor_info.id == editor.id).length}
                            formaction="?/remove_editor"
						/>
					{/each}
				</div>
			</div>
		</div>

		<!-- Collections -->
		<div class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
			<input type="checkbox" />
			<div class="collapse-title text-xl font-bold">Collections</div>
			<div class="collapse-content px-2">
				<div class="flex flex-col gap-y-1">
					{#each data.collections as collection}
						<ManagedElement 
                            elementData={collection}
                            contains={data.series.filter((series) => series.collection_info.id == collection.id).length}
                            formaction="?/remove_collection"
                        />
					{/each}
				</div>
			</div>
		</div>

		<!-- Series -->
		<div class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
			<input type="checkbox" />
			<div class="collapse-title text-xl font-bold">Series</div>
			<div class="collapse-content px-2">
				<div class="flex flex-col gap-y-1">
					{#each data.series as series}
						<ManagedElement 
                            elementData={series}
                            contains={data.comics.filter((comic) => comic.serie_info.id == series.id).length}
                            formaction="?/remove_series"
                        />
					{/each}
				</div>
			</div>
		</div>
		
		<!-- Authors -->
		<div class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
			<input type="checkbox" />
			<div class="collapse-title text-xl font-bold">Authors</div>
			<div class="collapse-content px-2">
				<div class="flex flex-col gap-y-1">
					{#each data.authors as author}
						<ManagedElement 
                            elementData={author}
                            contains={data.comics.filter((comic) => comic.authors_info.includes(author)).length}
                            formaction="?/remove_author"
                        />
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>
