<script lang="ts">
	import type { Author } from '@prisma/client';
	import MultiSelect from 'svelte-multiselect';

	export let options: Author[];
	export let values: any[] | undefined; // eslint-disable-line @typescript-eslint/no-explicit-any

	// Form props
	export let id: string;
	export let name: string;
	export let placeholder: string;

	export let modalId: string;

	let optionsToSelect = options.map((opt) => ({ label: opt.name, value: opt.id }));
</script>

<div class="flex flex-row gap-x-2 w-full">
	<div class="flex-auto">
		<MultiSelect
			{id}
			{name}
			bind:selected={values}
			options={optionsToSelect}
			{placeholder}
			outerDivClass="h-full"
		/>
	</div>
	<a class="btn btn-success" href="#{modalId}">New</a>
</div>
