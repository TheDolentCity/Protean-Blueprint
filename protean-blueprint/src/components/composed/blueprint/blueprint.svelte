<script>
    import Block from './block.svelte';
    import { activeFile } from '$lib/stores/fileStore';
    import Blocks from './blocks.svelte';

    $: console.log(JSON.stringify($activeFile, null, 2));
</script>

<div class="grid grid-cols-12 h-full max-h-full overflow-y-auto rounded-xl shadow-xl prose prose-zinc dark:prose-invert bg-white dark:bg-black border border-base-200 dark:border-base-800 motion-safe:transition motion-safe:duration-200">
    <!-- <Blocks bind:blocks={$activeFile.content} /> -->
    <Block bind:block={$activeFile} />
</div>