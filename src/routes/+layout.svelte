<script>
	import '../app.css';
</script>

<svelte:head>
	<title>Comics Finder</title>
</svelte:head>

<div class="bg-base-200 h-screen flex flex-col">
	<div class="navbar bg-base-100">
		<div class="flex-1">
		  <a class="btn btn-ghost normal-case text-xl" href="/">Comics Finder</a>
		</div>
		<div class="flex-none gap-2">
		  <div class="form-control">
			<input type="text" placeholder="Search" class="input input-bordered" />
		  </div>
		  <div>
			  <button class="btn btn-outline btn-secondary">Logout</button>
		  </div>
		</div>
	  </div>

	  <slot />
</div>
