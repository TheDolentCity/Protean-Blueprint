<script>
	import BrightnessCommand from './brightnessCommand.svelte';
	import EditCommand from './editCommand.svelte';
	import LockCommand from './lockCommand.svelte';
</script>

<div class="flex-none flex h-full max-h-full items-center justify-center">
	<div class="flex-none flex flex-col px-3 py-2 space-y-2 bg-base-100 dark:bg-base-900 rounded-xl shadow-xl border border-base-200 dark:border-base-800 motion-safe:transition motion-safe:duration-200">
		<BrightnessCommand />
		<EditCommand />
		<LockCommand />
	</div>
</div>
