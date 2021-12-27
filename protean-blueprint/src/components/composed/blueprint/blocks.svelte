<script>
    import Block from "./block.svelte";

    export let blocks;

    const isValidBlocks = () => {
        return blocks && Array.isArray(blocks);
    }
</script>

{#if !isValidBlocks()}
    <span class="">Error!</span>
{:else}
    {#each blocks as block}
        <Block bind:block={block} />
    {/each}
{/if}