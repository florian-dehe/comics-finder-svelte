<script lang="ts">
	import ManagedElement from '$lib/components/ManagedElement.svelte';
	import { makeDelete } from '$lib/requests/common';
	import type { PageData } from './$types';

	export let data: PageData;

    const removeEditor = async (id: number) => {
        await makeDelete(`/editors/${id}`);
        data.editors = data.editors.filter( el => el.id != id)
    }

    const removeCollection = async (id: number) => {
        await makeDelete(`/collections/${id}`);
        data.collections = data.collections.filter( el => el.id != id)
    }

    const removeSeries = async (id: number) => {
        await makeDelete(`/series/${id}`);
        data.series = data.series.filter( el => el.id != id)
    }
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
                            removeCallback={removeEditor}
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
                            removeCallback={removeCollection}
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
                            removeCallback={removeSeries}
                        />
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>
