<script>
	import { activeFile, files } from '$lib/stores/fileStore';

	const setActiveFile = (file) => {
		$activeFile = file;
	};
</script>

<div class="flex-auto flex flex-col py-2 space-y-2">
	<h3 class="sticky mb-3">Files</h3>
	{#each $files as file (file.id)}
		<button
			on:click={setActiveFile(file)}
			class={$activeFile.id === file.id
				? 'px-3 py-2 bg-white dark:bg-black rounded-xl shadow-xl border border-base-200 dark:border-base-800 motion-safe:transition motion-safe:duration-200'
				: 'px-3 py-2 bg-base-100 dark:bg-base-900 rounded-xl shadow-xl border border-base-200 dark:border-base-800 motion-safe:transition motion-safe:duration-200'}
		>
			<p class="body-strong">{file.meta.name}</p>
			<p>{file.meta.description}</p>
		</button>
	{/each}
</div>
