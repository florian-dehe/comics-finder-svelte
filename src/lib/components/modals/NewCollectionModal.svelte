<script lang="ts">
	export let modalId: string;
	export let editorId: number;
</script>

<div class="modal" id={modalId}>
	<div class="modal-box">
		<h3 class="font-bold text-lg">Create a new collection</h3>

		<p class="py-4">Create a new collection :</p>

		<form action="?/new_collection" method="post">
			<input type="hidden" name="editor_id" value={editorId} />
			<input
				type="text"
				placeholder="Type here"
				name="collection_name"
				class="input input-bordered w-full"
			/>

			<div class="modal-action">
				<!-- svelte-ignore a11y-invalid-attribute -->
				<a href="#" class="btn btn-outline btn-error">Cancel</a>
				<!-- svelte-ignore a11y-invalid-attribute -->
				<input type="submit" value="Add" class="btn" />
			</div>
		</form>
	</div>
</div>
