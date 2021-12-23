<script>
    import { activeFile } from '$lib/stores/filestore';
    import Block from './block.svelte';
</script>

<div class="flex-auto flex flex-col h-full max-h-full py-12 rounded-lg shadow bg-white dark:bg-gray-900">
    <Block data={$activeFile.content} />
</div>