<script>
	import Block from './block.svelte';
	import { activeFile, files, newFileForm } from '$lib/stores/fileStore';
	import NewFileForm from '../files/newFileForm.svelte';
	import { DocumentSize } from '$lib/enums/documentSize';
	import { CssBuilder } from '$lib/builders/cssBuilder';
	import { fly } from 'svelte/transition';

	$: blueprintCss = () => {
		return new CssBuilder()
			.addClass('h-full max-h-full content-start overflow-y-auto shadow-xl bg-white dark:bg-base-900 border-default mst')
			.addClass('aspect-[1/1.4142]', 
				$activeFile?.meta.fileData.documentSize !== DocumentSize.A4 ||
				$activeFile?.meta.fileData.documentSize !== DocumentSize.Letter ||
				$activeFile?.meta.fileData.documentSize !== DocumentSize.Poster ||
				$activeFile?.meta.fileData.documentSize !== DocumentSize.Square)
			.addClass('aspect-[1/1.4142]', $activeFile?.meta.fileData.documentSize === DocumentSize.A4)
			.addClass('aspect-[1/1.2941]', $activeFile?.meta.fileData.documentSize === DocumentSize.Letter)
			.addClass('aspect-[1/1.5]', $activeFile?.meta.fileData.documentSize === DocumentSize.Poster)
			.addClass('aspect-[1/1]', $activeFile?.meta.fileData.documentSize === DocumentSize.Square)
			.build();
	};
	
	const updateFilesStore = () => {
		let activeIndex = $files.findIndex(f => f.id === $activeFile.id);
		if (activeIndex != -1) {
			$files[activeIndex] = $activeFile;
		}
	}

	$: $activeFile, updateFilesStore();
</script>

{#if $newFileForm !== null}
	<div in:fly="{{ y: -50, duration: 200 }}" out:fly="{{ y: -50, duration: 200 }}" class="flex-grow flex h-full max-h-full px-12 py-8 items-center justify-center">
		<div class={blueprintCss()}>
			<div class="h-full max-h-full border-default mst">
				<NewFileForm />
			</div>
		</div>
	</div>
{:else}
	<div in:fly="{{ y: -50, duration: 200 }}" out:fly="{{ y: -50, duration: 200 }}" class="flex-grow flex h-full max-h-full px-12 py-8 items-center justify-center">
		<div class={blueprintCss()}>
			{#if $activeFile}
				<Block bind:block={$activeFile} />
			{/if}
		</div>
	</div>
{/if}