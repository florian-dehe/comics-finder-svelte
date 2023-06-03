<script lang="ts">
	import type { ActionData, PageData } from './$types';
	import { enhance } from '$app/forms';
	import SveltyPicker from 'svelty-picker';
	import SelectWithAdd from '$lib/components/SelectWithAdd.svelte';
	import NewEditorModal from '$lib/components/modals/NewEditorModal.svelte';
	import NewCollectionModal from '$lib/components/modals/NewCollectionModal.svelte';
	import NewSeriesModal from '$lib/components/modals/NewSeriesModal.svelte';
	import AlertSuccess from '$lib/components/alerts/AlertSuccess.svelte';
	import AlertError from '$lib/components/alerts/AlertError.svelte';
	import SelectMultipleWithAdd from '$lib/components/SelectMultipleWithAdd.svelte';
	import NewAuthorModal from '$lib/components/modals/NewAuthorModal.svelte';

	export let form: ActionData;
	export let data: PageData;

	let editor_id = -1;
	let collection_id = -1;
	let series_id = -1;
	let authors_id: number[] = [];

	//TODO: This should be handled with API routes hitting the database
	const collectionsForCurrentEditor = (id_editor: number) =>
		data.collections.filter((col) => col.editorId == id_editor);
	const seriesForCurrentCollection = (id_collection: number) =>
		data.series.filter((series) => series.collectionId == id_collection);
</script>

<div class="p-7 w-5/6 mx-auto">
	<form method="post" action="?/add" use:enhance>
		{#if form?.success}
			<AlertSuccess msg="Your comic has been successfully added !" />
		{:else if form?.editorSuccess}
			<AlertSuccess msg="Your editor has been successfully added !" />
		{:else if form?.collectionSuccess}
			<AlertSuccess msg="Your collection has been successfully added !" />
		{:else if form?.seriesSuccess}
			<AlertSuccess msg="Your series has been successfully added !" />
		{:else if form?.authorSuccess}
			<AlertSuccess msg="Your author has been successfully added !" />
		{/if}

		{#if form?.error}
			<AlertError msg="We could'nt add your comic !" />
		{:else if form?.editorError}
			<AlertError msg="We could'nt add your editor !" />
		{:else if form?.collectionError}
			<AlertError msg="We could'nt add your collection !" />
		{:else if form?.seriesError}
			<AlertError msg="We could'nt add your series !" />
		{:else if form?.authorError}
			<AlertError msg="We could'nt add your author !" />
		{/if}

		<div class="lg:flex flex-row gap-x-6 justify-center">
			<div class="container">
				<!-- Title -->
				<div class="form-control w-full">
					<label class="label" for="id_title">
						<span class="label-text font-bold text-lg">Title</span>
					</label>
					<input type="text" id="id_title" name="title" class="input input-bordered w-full" />
				</div>

				<!-- Editor -->
				<div class="form-control w-full">
					<label class="label" for="id_editor">
						<span class="label-text font-bold text-lg">Editor</span>
					</label>
					<SelectWithAdd
						id="id_editor"
						name="editor"
						placeholder="Select an editor"
						bind:value={editor_id}
						parent_id={0}
						options={data.editors}
						modalId="editor_modal"
					/>
				</div>

				<!-- Collection -->
				<div class="form-control w-full">
					<label class="label" for="id_collection">
						<span class="label-text font-bold text-lg">Collection</span>
					</label>
					<SelectWithAdd
						id="id_collection"
						name="collection"
						placeholder="Select a collection"
						bind:value={collection_id}
						parent_id={editor_id}
						options={collectionsForCurrentEditor(editor_id)}
						modalId="collection_modal"
					/>
				</div>

				<!-- Series -->
				<div class="form-control w-full">
					<label class="label" for="id_series">
						<span class="label-text font-bold text-lg">Series</span>
					</label>
					<SelectWithAdd
						id="id_series"
						name="series"
						placeholder="Select a series"
						bind:value={series_id}
						parent_id={collection_id}
						options={seriesForCurrentCollection(collection_id)}
						modalId="series_modal"
					/>
				</div>

				<!-- Description -->
				<div class="form-control w-full">
					<label class="label" for="id_description">
						<span class="label-text font-bold text-lg">Description</span>
					</label>
					<textarea
						class="textarea textarea-bordered"
						id="id_description"
						name="description"
						rows="4"
					/>
				</div>
			</div>

			<!-- Second column --->
			<div class="container">
				<!-- Volume -->
				<div class="form-control w-full">
					<label class="label" for="id_volume">
						<span class="label-text font-bold text-lg">Volume</span>
					</label>
					<input type="number" id="id_volume" name="volume" class="input input-bordered w-full" />
				</div>

				<!-- Release date -->
				<div class="form-control w-full">
					<label class="label" for="id_release_date">
						<span class="label-text font-bold text-lg">Release date</span>
					</label>

					<SveltyPicker
						inputClasses="input input-bordered w-full"
						name="release_date"
						format="yyyy-mm-dd"
					/>
				</div>

				<!-- Pages -->
				<div class="form-control w-full">
					<label class="label" for="id_pages">
						<span class="label-text font-bold text-lg">Pages</span>
					</label>
					<input type="number" id="id_pages" name="pages" class="input input-bordered w-full" />
				</div>

				<!-- ISBN / EAN -->
				<div class="form-control w-full">
					<label class="label" for="id_isbn">
						<span class="label-text font-bold text-lg">ISBN / EAN</span>
					</label>
					<input type="number" id="id_isbn" name="isbn" class="input input-bordered w-full" />
				</div>

				<!-- Cover url -->
				<div class="form-control w-full">
					<label class="label" for="id_cover_url">
						<span class="label-text font-bold text-lg">Cover url</span>
					</label>
					<input
						type="text"
						id="id_cover_url"
						name="cover_url"
						class="input input-bordered w-full"
					/>
				</div>

				<!-- Authors -->
				<div class="form-control w-full">
					<label class="label" for="id_series">
						<span class="label-text font-bold text-lg">Authors</span>
					</label>
					<SelectMultipleWithAdd
						id="id_authors"
						name="authors"
						placeholder="Select authors"
						bind:values={authors_id}
						options={data.authors}
						modalId="author_modal"
					/>
				</div>
			</div>
		</div>
		<div class="flex justify-center m-3">
			<input type="submit" value="Add new comic" class="btn btn-success my-3" />
		</div>
	</form>
</div>

<NewEditorModal modalId="editor_modal" />
<NewCollectionModal modalId="collection_modal" editorId={editor_id} />
<NewSeriesModal modalId="series_modal" collectionId={collection_id} />
<NewAuthorModal modalId="author_modal" />
