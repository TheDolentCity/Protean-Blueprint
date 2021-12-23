<script>
    import BrightnessControl from './commands/brightnessCommand.svelte';

    let source = "";
</script>

<div class="flex-auto flex flex-col h-full max-h-full py-12">
    <textarea bind:value={source} class="flex-auto p-2 bg-white dark:bg-black rounded-lg border border-gray-200 dark:border-gray-800" />
</div>