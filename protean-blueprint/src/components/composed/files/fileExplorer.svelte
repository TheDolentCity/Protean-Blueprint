<script>
	import { v4 as uuidv4 } from 'uuid';
	import { CssBuilder } from '$lib/builders/cssBuilder';
	import { activeFile, files } from '$lib/stores/fileStore';
	import { PlusLg } from 'svelte-bootstrap-icons';
	import { BlockTypes } from '$lib/enums/blockTypes';	
	import { ColumnTypes } from '$lib/enums/columnTypes';

	const setActiveFile = (file) => {
		$activeFile = file;
	};

	const createFile = () => {
		$files = [...$files, 
			{
				id: uuidv4(),
				type: BlockTypes.Section,
				meta:
				{
					fileData: {
						name: "Auto File Name",
						description: "This is a file description test."
					},
					columns: ColumnTypes.Full
				},
				content: []
			}];
	};

	$: fileCss = (file) => {
		return new CssBuilder()
			.addClass('px-3 py-2 rounded-xl text-left mst')
			.addClass('bg-base-50 dark:bg-base-900 shadow-xl border border-base-300 dark:border-base-700', $activeFile && $activeFile.id === file?.id)
			.addClass('bg-base-100 dark:bg-base-800 shadow border border-base-200 dark:border-base-800', !$activeFile || $activeFile.id !== file?.id)
			.build();
	};

	$: $activeFile, console.log(JSON.stringify($activeFile, null, 2));
</script>

<div class="flex-none w-60">
	<div class="flex w-full mb-3 items-center justify-between">
		<h3>Files</h3>
		<button on:click={createFile} class="btn-stealth btn-icon">
			<PlusLg />
		</button>
	</div>
	<div class="flex flex-col h-full py-2 space-y-2">
		{#each $files as file (file.id)}
			<button on:click={setActiveFile(file)} class={fileCss(file)}>
				<p class="type-body-strong">{file.meta.fileData.name}</p>
				<p>{file.meta.fileData.description}</p>
			</button>
		{/each}
	</div>
</div>