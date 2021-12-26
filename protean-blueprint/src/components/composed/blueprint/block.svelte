<script>
    import { BlockType } from "$lib/blockTypes";
    import { Paragraph } from "svelte-bootstrap-icons";

    export let data;

    function isValidData(d) {
        return data.type && data.content && BlockType[data.type.name];
    }
</script>

{#if !isValidData(data)}
    <span class="">Error!</span>
{:else if data.type === BlockType.SectionFull}
    <div class="flex flex-col p-4 border border-base-200 dark:border-base-800 motion-safe:transition motion-safe:duration-200">
        {#each data.content as block}
            <svelte:self data={block} />
        {/each}
    </div>
{:else if data.type === BlockType.SectionHalf}
    <div class="flex flex-col p-4 border border-base-200 dark:border-base-800 motion-safe:transition motion-safe:duration-200">
        {#each data.content as block}
            <svelte:self data={block} />
        {/each}
    </div>
{:else if data.type === BlockType.Header1}
    <h1>{data.content}</h1>
{:else if data.type === BlockType.Header2}
    <h2>{data.content}</h2>
{:else if data.type === BlockType.Header3}
    <h3>{data.content}</h3>
{:else if data.type === BlockType.Header4}
    <h4>{data.content}</h4>
{:else if data.type === BlockType.Header5}
    <h5>{data.content}</h5>
{:else if data.type === BlockType.Header6}
    <h6>{data.content}</h6>
{:else if data.type === BlockType.Paragraph}
    <p>{data.content}</p>
{:else}
     <!-- else content here -->
{/if}