<script lang="ts">
	export let modalId: string;
</script>

<div class="modal" id={modalId}>
	<div class="modal-box">
		<h3 class="font-bold text-lg">Create a new editor</h3>

        <p class="py-4">Create a new editor :</p>
        
        <form action="?/new_editor" method="post">
            <input type="text" placeholder="Type here" name="editor_name" class="input input-bordered w-full" />

			<div class="modal-action">
				<!-- svelte-ignore a11y-invalid-attribute -->
				<a href="#" class="btn btn-outline btn-error">Cancel</a>
				<!-- svelte-ignore a11y-invalid-attribute -->
				<input type="submit" value="Add" class="btn">
			</div>
        </form>
	</div>
</div>
