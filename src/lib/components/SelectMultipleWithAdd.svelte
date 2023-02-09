<script lang="ts">
	import type { Author } from "$lib/types/Comic";
    import MultiSelect from 'svelte-multiselect';


    export let options: Author[];
    export let values: any[];

    // Form props
    export let id: string;
    export let name: string;
    export let placeholder: string;

    export let modalId: string;

    let optionsToSelect = options.map( opt => ({ 'label': opt.name, 'value': opt.id }))
</script>

<div class="flex flex-row gap-x-2 w-full">
    <MultiSelect id={id} name={name} bind:selected={values} options={optionsToSelect} placeholder={placeholder} />
    <a class="btn btn-success" href="#{modalId}">New</a>
</div>