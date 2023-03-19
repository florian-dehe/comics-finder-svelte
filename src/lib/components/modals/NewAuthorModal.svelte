<script lang="ts">
	export let modalId: string;
</script>

<div class="modal" id={modalId}>
	<div class="modal-box">
		<h3 class="font-bold text-lg">Create a new author</h3>

		<p class="py-4">Create a new author :</p>

		<form action="?/new_author" method="post">
			<input
				type="text"
				placeholder="Type here"
				name="author_name"
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
