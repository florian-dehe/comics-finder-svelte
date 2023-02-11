<script>
	import { PlusIcon, BookIcon, LogOutIcon } from 'svelte-feather-icons'
</script>

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
		<div class="flex flex-row gap-x-2 mx-6">
			<a class="btn btn-primary" href="/add">
				<PlusIcon />
			</a>
			<a class="btn btn-secondary" href="/manage">
				<BookIcon />
			</a>
		</div>
		<form action="/logout" method="post">
			<button type="submit" class="btn btn-outline btn-primary">
				<LogOutIcon />
			</button>
		</form>
	</div>
</div>

<slot />
