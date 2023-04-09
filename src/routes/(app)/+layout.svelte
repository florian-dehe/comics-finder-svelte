<script lang="ts">
	import { PlusIcon, BookIcon, LogOutIcon, MenuIcon } from 'svelte-feather-icons';
</script>

<div class="navbar bg-base-100">
	<div class="navbar-start">
		<div class="dropdown">
			<!-- svelte-ignore a11y-no-noninteractive-tabindex a11y-label-has-associated-control -->
			<label tabindex="0" class="btn btn-ghost lg:hidden">
				<MenuIcon />
			</label>
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
				<li>
					<a href="/add">
						<PlusIcon /> Add a comic
					</a>
				</li>
				<li>
					<a href="/manage">
						<BookIcon /> Manage library
					</a>
				</li>
			</ul>
		</div>
		<div class="hidden lg:block">
			<a class="btn btn-ghost normal-case text-xl" href="/">Comics Finder</a>
		</div>
	</div>
	<div class="navbar-center">
		<div class="form-control hidden lg:block">
			<input type="text" placeholder="Search" class="input input-bordered" />
		</div>
		<a class="btn btn-ghost normal-case text-xl lg:hidden" href="/">Comics Finder</a>
	</div>
	<div class="navbar-end">
		<div class="hidden lg:flex flex-row gap-x-2 mr-2">
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
