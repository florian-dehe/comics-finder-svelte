<script lang="ts">
	import '../app.css';
	
    import { onMount } from 'svelte';
	import { firebaseAuth } from '$lib/firebase';
	import { authStore } from '$lib/stores/auth';
	import { goto } from '$app/navigation';

    onMount(() => {
		firebaseAuth.onAuthStateChanged((user) => {
			authStore.set({
				isLoading: false,
				isLoggedIn: user !== null,
				currentUser: user,
				firebaseControlled: true
			});
		});
	});

	authStore.subscribe(async ({ isLoggedIn, firebaseControlled }) => {
		if (!isLoggedIn && firebaseControlled) {
			await goto('/login');
		}
	});
</script>

<svelte:head>
	<title>Comics Finder</title>
</svelte:head>

<slot />
