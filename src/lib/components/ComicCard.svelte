<script lang="ts">
	import type { Comic, Series } from '@prisma/client';

	export let data: Comic & { series: Series };
</script>

<a class="card card-compact w-64 md:w-56 bg-base-100 shadow-xl mx-auto xl:mx-0" href="/{data.isbn}">
	<figure class="w-64 md:w-56 h-96 md:h-80">
		<img src="https://placehold.co/200x400" alt="Cover" />
	</figure>
	<div class="card-body">
		<p class="text-lg">
			<span class="text-primary font-bold">
				{data.series.name}
			</span>
			<br />
			<span class="text-secondary font-semibold">
				{data.volume}.{data.title}
			</span>
		</p>
	</div>
</a>
