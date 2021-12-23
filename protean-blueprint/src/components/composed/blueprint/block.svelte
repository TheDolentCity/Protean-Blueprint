<script>
    import { BlockType } from "$lib/blockTypes";

    export let data;

    function isValidType(t) {
        switch (t) {
            case "Section": return true;
            default: return false;
        }
    }
</script>

{#if !data.type || !isValidType(data.type) || !data.content}
    <span class="">Error!</span>
{:else if data.type === BlockType.SectionFull}
    <div class="flex flex-col shadow-xl bg-yellow-500">
        <svelte:self data={data.content} />
    </div>
{:else}
     <!-- else content here -->
{/if}