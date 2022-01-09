<script>
	import Block from './block.svelte';
	import { activeFile, files } from '$lib/stores/fileStore';

	$: $activeFile, updateFilesStore();
	
	const updateFilesStore = () => {
		let activeIndex = $files.findIndex(f => f.id === $activeFile.id);
		if (activeIndex != -1) {
			$files[activeIndex] = $activeFile;
		}
	}
</script>

<div class="flex-grow flex h-full max-h-full py-8 items-center justify-center">
	<div class="aspect-[1/1.4142] h-full">
		{#if $activeFile}
			<div class="grid grid-cols-12 h-full max-h-full content-start overflow-y-auto rounded-xl shadow-xl bg-white dark:bg-base-900 border-default mst">
				<Block bind:block={$activeFile} />
			</div>
		{:else}
			<div class="flex h-full max-h-full justify-center items-center border-default mst">
				<h2>No active file</h2>
			</div>
		{/if}
	</div>
</div>