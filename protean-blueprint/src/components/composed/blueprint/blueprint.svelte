<script>
    import Block from './block.svelte';
    import { activeFile } from '$lib/stores/fileStore';

    // $: console.log(JSON.stringify($activeFile, null, 2));
</script>

{#if $activeFile}
    <div class="flex-grow grid grid-cols-12 h-full max-h-full overflow-y-auto rounded-xl shadow-xl bg-white dark:bg-black border border-base-200 dark:border-base-800 motion-safe:transition motion-safe:duration-200">
        <Block bind:block={$activeFile} />
    </div>
{:else}
    <h1>No Active File</h1>
{/if}
