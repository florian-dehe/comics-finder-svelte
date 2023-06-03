<script lang="ts">
	import type { Editor, Collection, Series, Author } from '@prisma/client';

	export let elementData: Editor | Collection | Series | Author;
	export let contains: number;
	export let formaction: string;
</script>

<div class="alert bg-base-100 border-2 border-base-300 p-2">
	<div class="flex flex-row justify-between w-full">
		<h3 class="font-semibold">
			{elementData.name} <span class="font-medium"> ({contains} elements)</span>
		</h3>
		<form action={formaction} method="post">
			<input type="hidden" name="id" value={elementData.id} />
			<button type="submit" class="btn btn-sm btn-outline btn-error">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			</button>
		</form>
	</div>
</div>
