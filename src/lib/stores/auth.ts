import type { User } from 'firebase/auth';
import { writable, type Writable } from 'svelte/store';

type AuthStore = {
	isLoading: boolean;
	isLoggedIn: boolean;
	currentUser?: User | null;
	firebaseControlled: boolean;
};

export const authStore: Writable<AuthStore> = writable<AuthStore>({
	isLoading: true,
	isLoggedIn: false,
	firebaseControlled: false
});
