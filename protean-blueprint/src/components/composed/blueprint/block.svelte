<script>
    import { editing } from '$lib/stores/editorStore';
    import { BlockType } from "$lib/blockTypes";
    import Blocks from "./blocks.svelte";
    import EditBlock from './editBlock.svelte';
    import Header1 from "./blocks/header1.svelte";
    import Header2 from './blocks/header2.svelte';
    import Header3 from './blocks/header3.svelte';
    import Header4 from './blocks/header4.svelte';
    import Header5 from './blocks/header5.svelte';
    import Header6 from './blocks/header6.svelte';
    import Paragraph from './blocks/paragraph.svelte';

    export let block;

    $: isValidBlock = () => {
        return block?.type && BlockType[block.type?.name];
    }

    $: hasNestedBlocks = (b) => {
        return b.content && Array.isArray(b.content);
    }
</script>

{#if !isValidBlock()}
    <span class="">Error!</span>
{:else if block.type === BlockType.Root}
    {#if $editing}
        <EditBlock bind:block />
    {:else if hasNestedBlocks(block)}
        <Blocks bind:blocks={block.content} />
    {/if}
{:else if block.type === BlockType.SectionFull}
    <div class="col-span-full flex flex-col p-4 border border-base-200 dark:border-base-800 motion-safe:transition motion-safe:duration-200">
        {#if $editing}
            <EditBlock bind:block />
        {:else if hasNestedBlocks(block)}
            <Blocks bind:blocks={block.content} />
        {/if}
    </div>
{:else if block.type === BlockType.SectionHalf}
    <div class="col-span-6 flex flex-col p-4 border border-base-200 dark:border-base-800 motion-safe:transition motion-safe:duration-200">
        {#if $editing}
            <EditBlock bind:block />
        {:else if hasNestedBlocks(block)}
            <Blocks bind:blocks={block.content} />
        {/if}
    </div>
{:else if $editing}
    <EditBlock bind:block />
{:else if block.type === BlockType.Header1}
    <Header1 bind:block />
{:else if block.type === BlockType.Header2}
    <Header2 bind:block />
{:else if block.type === BlockType.Header3}
    <Header3 bind:block />
{:else if block.type === BlockType.Header4}
    <Header4 bind:block />
{:else if block.type === BlockType.Header5}
    <Header5 bind:block />
{:else if block.type === BlockType.Header6}
    <Header6 bind:block />
{:else if block.type === BlockType.Paragraph}
    <Paragraph bind:block />
{:else}
    <h1>Else</h1>
{/if}