<script>
    import { editing } from '$lib/stores/editorStore';

    export let block;
</script>

{#if $editing}
    <input 
        bind:value={block.content}
        type="text"
        placeholder="Begin typing..."
        class="mb-2 p-2 rounded bg-base-100 dark:bg-base-900" />
{:else}
    <h1>{block.content}</h1>
{/if}