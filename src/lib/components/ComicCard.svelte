<script lang="ts">
	import type { Comic } from '../types/Comic';
	export let data: Comic;
</script>

<a class="card card-compact w-64 md:w-56 bg-base-100 shadow-xl mx-auto xl:mx-0" href="/{data.id}">
	<figure class="w-64 md:w-56 h-96 md:h-80">
		<img src={data.cover_url} alt="Cover" />
	</figure>
	<div class="card-body">
		<p class="text-lg">
			<span class="text-primary font-bold">
				{data.serie_info.name}
			</span>
			<br />
			<span class="text-secondary font-semibold">
				{data.volume}.{data.title}
			</span>
		</p>
	</div>
</a>
