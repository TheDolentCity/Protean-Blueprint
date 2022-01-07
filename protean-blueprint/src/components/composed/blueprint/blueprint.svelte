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

{#if $activeFile}
	<div class="flex-grow grid grid-cols-12 h-full max-h-full content-start overflow-y-auto rounded-xl shadow-xl bg-base-50 dark:bg-base-900 border border-base-200 dark:border-base-800 mst">
		<Block bind:block={$activeFile} />
	</div>
{:else}
	<div class="flex-grow flex h-full max-h-full justify-center items-center border border-base-200 dark:border-base-800 mst">
		<h2>No active file</h2>
	</div>
{/if}
