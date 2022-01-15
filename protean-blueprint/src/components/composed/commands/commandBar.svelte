<script>
	import BrightnessCommand from './brightnessCommand.svelte';
	import EditCommand from './editCommand.svelte';
	import LockCommand from './lockCommand.svelte';
</script>

<div class="flex-none flex flex-col h-full max-h-full py-2 bg-white dark:bg-base-900 mst">
	<BrightnessCommand />
	<EditCommand />
	<LockCommand />
</div>
