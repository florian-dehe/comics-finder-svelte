<script lang="ts">
	export let modalId: string;
	export let comicId: bigint | undefined;
</script>

<div class="modal" id={modalId}>
	<div class="modal-box">
		<h3 class="font-bold text-lg">Delete a comic</h3>

		<p class="py-4">Are you sure you want to delete this comic ?</p>

		<form action="?/delete_comic" method="post">
			<input type="hidden" name="id" value={comicId} />
			<div class="modal-action">
				<!-- svelte-ignore a11y-invalid-attribute -->
				<a href="#" class="btn btn-outline">Cancel</a>
				<!-- svelte-ignore a11y-invalid-attribute -->
				<input type="submit" value="Delete" class="btn btn-error" />
			</div>
		</form>
	</div>
</div>
