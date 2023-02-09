<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<div class="flex flex-row justify-center mt-3 gap-x-4">
	<figure class="max-w-md flex flex-col justify-center">
		<img src={data.comic.cover_url} alt="Cover img" class="rounded-xl shadow-xl" />
	</figure>
	<div class="card bg-base-100 shadow-xl">
		<div class="card-body">
            <h2 class="text-3xl font-semibold">{data.comic.title}</h2>
            <div class="leading-4">
                <h3 class="text-lg"><span class="font-bold">Series:</span> {data.comic.serie_info.name}</h3>
                <h3 class="text-lg"><span class="font-bold">Volume:</span> {data.comic.volume}</h3>
                <h3 class="text-lg"><span class="font-bold">Collection:</span> {data.comic.serie_info.collection_info.name}</h3>
                <h3 class="text-lg"><span class="font-bold">Editor:</span> {data.comic.serie_info.collection_info.editor_info.name}</h3>
            </div>
            
            <div class="max-w-md my-3">
                <p>
                    <span class="font-bold">Description</span>
                    <br>
                    {data.comic.description}
                </p>
            </div>

            <div class="leading-4">
                <h3 class="text-lg"><span class="font-bold">EAN:</span> {data.comic.isbn}</h3>
                <h3 class="text-lg"><span class="font-bold">Release date:</span> {data.comic.release_date}</h3>
                <h3 class="text-lg"><span class="font-bold">Pages:</span> {data.comic.pages}</h3>
            </div>

            <div class="my-3">
                <h3 class="text-lg font-bold">Authors</h3>
                <div class="flex flex-row my-1 gap-x-1">
                    {#each data.comic.authors_info as author }
                    <div class="badge badge-primary">{author.name}</div>
                {/each}
                </div>
            </div>
		</div>
	</div>
</div>
