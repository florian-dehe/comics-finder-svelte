<script lang="ts">
	import type { Collection, Editor, Serie } from "$lib/types/Comic";


    export let options: Editor[] | Collection[] | Serie[];
    export let parent_id: number;
    export let value: number;

    // Form props
    export let id: string;
    export let name: string;
    export let placeholder: string;

    export let modalId: string;

    $: value = (options.map(opt => opt.id).includes(value)) ? value : -1;

    let isDisabled = true;
    $: isDisabled = (parent_id == -1);
</script>

<div class="flex flex-row gap-x-2 w-full">
    {#if isDisabled }
    <select id={id} name={name} class="select select-bordered w-10/12" disabled>
        <option disabled selected>{placeholder}</option>
    </select>
    <!-- svelte-ignore a11y-invalid-attribute -->
    <a class="btn btn-disabled" href="#">New</a>
    {:else}
    <select id={id} name={name} class="select select-bordered w-10/12" bind:value={value}>
        <option value={-1} disabled selected>{placeholder}</option>
        {#each options as opt }
            <option value={opt.id}>{opt.name}</option>
        {/each}
    </select>
    <a class="btn btn-success" href="#{modalId}">New</a>
    {/if}
    
</div>