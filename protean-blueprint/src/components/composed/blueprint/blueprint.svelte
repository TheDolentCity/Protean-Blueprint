<script>
    import { activeFile } from '$lib/stores/filestore';
import BrightnessCommand from '../commands/brightnessCommand.svelte';
    import Block from './block.svelte';
</script>


<div class="flex-auto flex flex-col h-full max-h-full">
    <div class="flex sticky mb-3 justify-between">
        <h3>{$activeFile.meta.name}</h3>
        <div class="px-2 py-3 space-x-2 bg-base-100 dark:bg-base-900 rounded-xl shadow-xl border border-base-200 dark:border-base-800 motion-safe:transition motion-safe:duration-200">
            <BrightnessCommand />
        </div>
    </div>
    <div class="flex flex-col overflow-y-auto rounded-xl shadow-xl prose prose-zinc dark:prose-invert bg-white dark:bg-black border border-base-200 dark:border-base-800 motion-safe:transition motion-safe:duration-200">
        {#each $activeFile.content as block}
            <Block data={block} />
        {/each}
    </div>
</div>