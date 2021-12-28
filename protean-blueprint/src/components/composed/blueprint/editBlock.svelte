<script>
    import { editing } from '$lib/stores/editorStore';
    import { BlockType } from "$lib/blockTypes";
    import Blocks from "./blocks.svelte";
    import Header1 from "./blocks/header1.svelte";
    import { Arrow90degLeft, ArrowDown, ArrowDownLeft, ArrowReturnLeft, ArrowUp, ArrowUpLeft } from 'svelte-bootstrap-icons';

    export let block;

    $: hasNestedBlocks = (b) => {
        return b.content && Array.isArray(b.content);
    }
</script>

<div class="col-span-full flex p-4 items-center justify-between border border-base-200 dark:border-base-800 mst">
    <span class="body-strong mr-3">
        {block.type.name}
    </span>
    <div class="grid grid-cols-2 gap-2">
        <button class="btn-primary btn-icon">
            <ArrowUp />
        </button>
        <button class="btn-primary btn-icon">
            <Arrow90degLeft />
        </button>
        <button class="btn-primary btn-icon">
            <ArrowDown />
        </button>
        <button class="btn-primary btn-icon">
            <ArrowReturnLeft />
        </button>
    </div>
</div>
{#if hasNestedBlocks(block)}
    <Blocks bind:blocks={block.content} />
{/if}