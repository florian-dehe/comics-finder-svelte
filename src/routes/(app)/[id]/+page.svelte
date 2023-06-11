<script lang="ts">
	import { TrashIcon, EditIcon } from 'svelte-feather-icons';
	import type { PageData } from './$types';
	import DeleteComicsModal from '$lib/components/modals/DeleteComicsModal.svelte';

	export let data: PageData;
</script>

<div class="container p-6 mx-auto">
	<div class="flex flex-col lg:flex-row lg:justify-items-stretch gap-4">
		<figure class="mx-auto grow">
			<img src={data.comic?.coverUrl} alt="Cover img" class="rounded-xl shadow-xl lg:mx-0 w-full" />
		</figure>
		<div class="card bg-base-100 shadow-xl flex-auto grow lg:w-1/2">
			<div class="card-body">
				<div class="flex flex-row justify-between">
					<h2 class="text-3xl font-semibold">{data.comic?.title}</h2>
					<div class="gap-x-3">
						<button class="btn btn-outline btn-secondary btn-square btn-sm">
							<EditIcon />
						</button>
						<a class="btn btn-outline btn-error btn-square btn-sm" href="#delete_modal">
							<TrashIcon />
						</a>
					</div>
				</div>
				<div class="leading-4">
					<h3 class="text-lg">
						<span class="font-bold">Series:</span>
						{data.comic?.series.name}
					</h3>
					<h3 class="text-lg"><span class="font-bold">Volume:</span> {data.comic?.volume}</h3>
					<h3 class="text-lg">
						<span class="font-bold">Collection:</span>
						{data.comic?.series.collection.name}
					</h3>
					<h3 class="text-lg">
						<span class="font-bold">Editor:</span>
						{data.comic?.series.collection.editor.name}
					</h3>
				</div>

				<div class="my-3">
					<p>
						<span class="font-bold">Description</span>
						<br />
						{data.comic?.description}
					</p>
				</div>

				<div class="leading-4">
					<h3 class="text-lg"><span class="font-bold">EAN:</span> {data.comic?.isbn}</h3>
					<h3 class="text-lg">
						<span class="font-bold">Release date:</span>
						{data.comic?.releaseDate.toLocaleDateString()}
					</h3>
					<h3 class="text-lg"><span class="font-bold">Pages:</span> {data.comic?.pages}</h3>
				</div>

				<div class="my-3">
					<h3 class="text-lg font-bold">Authors</h3>
					<div class="flex flex-row my-1 gap-x-1">
						{#each data.authors as author}
							<div class="badge badge-primary">{author.name}</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<DeleteComicsModal modalId="delete_modal" comicId={data.comic?.isbn} />
