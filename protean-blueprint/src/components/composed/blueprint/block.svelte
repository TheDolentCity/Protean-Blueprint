<script>
    import { BlockType } from "$lib/blockTypes";
    import Blocks from "./blocks.svelte";
    import Header1 from "./blocks/header1.svelte";

    export let block;

    const isValidBlock = () => {
        return block.type && block.content && BlockType[block.type.name];
    }

    const hasNestedBlocks = (b) => {
        return b.content && Array.isArray(b.content);
    }
</script>

{#if !isValidBlock()}
    <span class="">Error!</span>
{:else if block.type === BlockType.Root}
    {#if hasNestedBlocks(block)}
        <Blocks bind:blocks={block.content} />
    {/if}
{:else if block.type === BlockType.SectionFull}
    <div class="col-span-full flex flex-col p-4 border border-base-200 dark:border-base-800 motion-safe:transition motion-safe:duration-200">
        {#if hasNestedBlocks(block)}
            <Blocks bind:blocks={block.content} />
        {/if}
    </div>
{:else if block.type === BlockType.SectionHalf}
    <div class="col-span-6 flex flex-col p-4 border border-base-200 dark:border-base-800 motion-safe:transition motion-safe:duration-200">
        {#if hasNestedBlocks(block)}
            <Blocks bind:blocks={block.content} />
        {/if}
    </div>
{:else if block.type === BlockType.Header1}
    <Header1 bind:block />
{:else if block.type === BlockType.Header2}
    <h2>{block.content}</h2>
{:else if block.type === BlockType.Header3}
    <h3>{block.content}</h3>
{:else if block.type === BlockType.Header4}
    <h4>{block.content}</h4>
{:else if block.type === BlockType.Header5}
    <h5>{block.content}</h5>
{:else if block.type === BlockType.Header6}
    <h6>{block.content}</h6>
{:else if block.type === BlockType.Paragraph}
    <p>{block.content}</p>
{:else}
    <h1>Else</h1>
{/if}