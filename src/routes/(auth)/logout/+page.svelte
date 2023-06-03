<script lang="ts">
    import { goto } from "$app/navigation";
    import { firebaseAuth } from "$lib/firebase";
    import { signOut } from "firebase/auth";
    import { authStore } from "$lib/stores/auth";
    
    const logout = () => {
        signOut(firebaseAuth)
          .catch((error: Error) => {
            console.error(error);
          });
    };

    if ($authStore.currentUser) {
		logout();
		goto('/');
	}
</script>
