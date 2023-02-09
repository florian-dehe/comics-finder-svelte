<script>
	import '../app.css';
</script>

<svelte:head>
	<title>Comics Finder</title>
</svelte:head>

<div class="navbar bg-base-100">
	<div class="navbar-start">
		<a class="btn btn-ghost normal-case text-xl" href="/">Comics Finder</a>
	</div>
	<div class="navbar-center">
		<div class="form-control">
			<input type="text" placeholder="Search" class="input input-bordered" />
		</div>
	</div>
	<div class="navbar-end">
		<div class="flex flex-row gap-x-2">
			<a class="btn btn-success" href="/add">Add</a>
			<button class="btn btn-outline btn-secondary">Logout</button>
		</div>
	</div>
</div>

<slot />
