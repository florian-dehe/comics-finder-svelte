<script lang="ts">
	import type { Comic } from '../types/Comic'
	export let data : Comic;
</script>

<a href="/{data.id}">
	<div class="card card-compact w-64 bg-base-100 shadow-xl mx-3 my-2 ">
		<figure class="w-64 h-96">
			<img src={data.cover_url} alt="Cover"/>
		</figure>
		<div class="card-body">
			<p class="text-lg">
				<span class="text-primary font-bold">
					{data.serie_info.name}
				</span>
				<br>
				<span class="text-secondary font-semibold">
					{data.volume}.{data.title}
				</span>
			</p>
		</div>
	</div>
</a>
