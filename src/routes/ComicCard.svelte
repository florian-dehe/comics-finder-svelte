<script>
	 export let data;
</script>

<div class="card card-compact w-96 bg-base-100 shadow-xl">
	<figure><img src={data.cover_url} alt="Shoes" /></figure>
	<div class="card-body">
		<h2 class="card-title">{data.title}</h2>
		<div class="card-actions justify-end">
			<button class="btn btn-primary">Details</button>
		</div>
	</div>
</div>
