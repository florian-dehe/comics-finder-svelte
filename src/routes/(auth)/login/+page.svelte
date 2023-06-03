<script lang="ts">
	import { goto } from '$app/navigation';
	import { firebaseAuth } from '$lib/firebase';
	import { signInWithEmailAndPassword } from 'firebase/auth';
	import { authStore } from '$lib/stores/auth';

	let email: string;
	let password: string;
	let incorrect: boolean;

	authStore.subscribe(async ({ isLoggedIn }) => {
		if (isLoggedIn) {
			goto('/');
		}
	});

	const handleLogin = () => {
		signInWithEmailAndPassword(firebaseAuth, email, password)
			.then(() => {
				goto('/');
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorCode, errorMessage);

				incorrect = true;
			});
	};
</script>

<div class="h-screen flex flex-col justify-center">
	<div class="flex flex-row justify-center">
		<div class="card w-96 bg-base-100 shadow-xl">
			<div class="card-body items-center text-center">
				<h2 class="card-title text-2xl">Login</h2>

				{#if incorrect}
					<p class="mt-3 text-red-500 text-center font-semibold">Wrong credentials</p>
				{/if}

				<form on:submit|preventDefault={handleLogin}>
					<div>
						<label for="id_email" class="label">
							<span class="label-text">Email</span>
						</label>
						<input
							type="email"
							id="id_email"
							required
							class="input input-bordered w-full max-w-sm"
							bind:value={email}
						/>

						<label for="id_password" class="label">
							<span class="label-text">Password</span>
						</label>
						<input
							type="password"
							id="id_password"
							required
							class="input input-bordered w-full max-w-sm"
							bind:value={password}
						/>

						<div class="flex flex-row justify-center my-5">
							<input type="submit" value="Sign In" class="btn btn-primary" />
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>
