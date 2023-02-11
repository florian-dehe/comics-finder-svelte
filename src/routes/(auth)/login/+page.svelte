<script lang="ts">
	import LoginForm from '$lib/components/auth/LoginForm.svelte';
	import type { ActionData } from './$types';

	export let form : ActionData
</script>

<div class="h-screen flex flex-col justify-center">
	<div class="flex flex-row justify-center">
		<div class="card w-96 bg-base-100 shadow-xl">
			<div class="card-body items-center text-center">
				<h2 class="card-title text-2xl">Login</h2>
		
				{#if form?.incorrect}
					<p class="mt-3 text-red-500 text-center font-semibold">Wrong credentials</p>
				{/if}
				<form action="?/login" method="post">
					<LoginForm />
				</form>
			</div>
		</div>
	</div>
</div>
