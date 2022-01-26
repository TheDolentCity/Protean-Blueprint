<script>
	import { CssBuilder } from '$lib/builders/cssBuilder';
	import { activeFile, files, newFileForm } from '$lib/stores/fileStore';
	import { PlusLg } from 'svelte-bootstrap-icons';

	const setActiveFile = (file) => {
		$activeFile = file;
	};

	$: fileCss = (file) => {
		return new CssBuilder()
			.addClass('px-4 py-2 border-t border-base-200 dark:border-base-800 text-left mst')
			.addClass('bg-base-100 dark:bg-base-800', $activeFile && $activeFile.id === file?.id)
			.addClass('', !$activeFile || $activeFile.id !== file?.id)
			.build();
	};

	$: $activeFile, console.log(JSON.stringify($activeFile, null, 2));
</script>

<div class="flex-none flex flex-col w-60 h-full max-h-full border-r border-l border-base-200 dark:border-base-800 bg-white dark:bg-base-900 mst">
	<div class="flex-none flex w-full px-4 py-2 items-center justify-between">
		<h3>Files</h3>
		<button on:click={() => $newFileForm = {}} class="btn-stealth btn-icon">
			<PlusLg />
		</button>
	</div>
	<div class="flex-auto flex flex-col py-2 overflow-y-auto">
		{#each $files as file (file.id)}
			<button on:click={setActiveFile(file)} class={fileCss(file)}>
				<span class="type-focus">{file.meta.name}</span>
				<p>{file.meta.description}</p>
			</button>
		{/each}
	</div>
</div>