<script>
	import BrightnessCommand from './brightnessCommand.svelte';
	import EditCommand from './editCommand.svelte';
	import LockCommand from './lockCommand.svelte';
</script>

<div class="flex-none flex flex-col h-full max-h-full px-3 py-2 space-y-2 bg-white dark:bg-base-900 mst">
	<BrightnessCommand />
	<EditCommand />
	<LockCommand />
</div>
