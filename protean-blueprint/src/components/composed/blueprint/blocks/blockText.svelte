<script>
	import { fade } from 'svelte/transition';
	import { autoresize } from 'svelte-textarea-autoresize';
	import { selectedBlock } from '$lib/stores/fileStore';
	import { editing, locked } from '$lib/stores/editorStore';
	import { CssBuilder } from '$lib/builders/cssBuilder';
	import { TextTypes } from '$lib/enums/textTypes';
	import { TextCapitals } from '$lib/enums/textCapitals';
	import { Alignments } from '$lib/enums/alignments';

	export let block;

	$: containerCss = () => {
		return new CssBuilder()
			.addClass('isolation group relative col-start-1 flex justify-center border border-opacity-0 outline-none mst')
			.addClass('border-opacity-100 border-accent-500 dark:border-accent-700', selected)
			.addClass('col-start-1', block.meta.columnStart === 1)
			.addClass('col-start-2', block.meta.columnStart === 2)
			.addClass('col-start-3', block.meta.columnStart === 3)
			.addClass('col-start-4', block.meta.columnStart === 4)
			.addClass('col-start-5', block.meta.columnStart === 5)
			.addClass('col-start-6', block.meta.columnStart === 6)
			.addClass('col-start-7', block.meta.columnStart === 7)
			.addClass('col-start-8', block.meta.columnStart === 8)
			.addClass('col-start-9', block.meta.columnStart === 9)
			.addClass('col-start-10', block.meta.columnStart === 10)
			.addClass('col-start-11', block.meta.columnStart === 11)
			.addClass('col-start-12', block.meta.columnStart === 12)
			.addClass('col-start-13', block.meta.columnStart === 13)
			.addClass('col-end-1', block.meta.columnEnd === 1)
			.addClass('col-end-2', block.meta.columnEnd === 2)
			.addClass('col-end-3', block.meta.columnEnd === 3)
			.addClass('col-end-4', block.meta.columnEnd === 4)
			.addClass('col-end-5', block.meta.columnEnd === 5)
			.addClass('col-end-6', block.meta.columnEnd === 6)
			.addClass('col-end-7', block.meta.columnEnd === 7)
			.addClass('col-end-8', block.meta.columnEnd === 8)
			.addClass('col-end-9', block.meta.columnEnd === 9)
			.addClass('col-end-10', block.meta.columnEnd === 10)
			.addClass('col-end-11', block.meta.columnEnd === 11)
			.addClass('col-end-12', block.meta.columnEnd === 12)
			.addClass('col-end-13', block.meta.columnEnd === 13)
			.build();
	};
	
	$: inputCss = () => {
		return new CssBuilder()
			.addClass('w-full resize-none outline-none break-words mst')
			.addClass('block-input', !$editing)
			.addClass('p-2', $editing)
			.addClass('type-display', block.meta.type === TextTypes.H1)
			.addClass('type-title-large', block.meta.type === TextTypes.H2)
			.addClass('type-title', block.meta.type === TextTypes.H3)
			.addClass('type-subtitle', block.meta.type === TextTypes.H4)
			.addClass('type-body-large', block.meta.type === TextTypes.H5)
			.addClass('type-body-strong', block.meta.type === TextTypes.H6)
			.addClass('type-body', block.meta.type === TextTypes.P)
			.addClass('text-left', block.meta.alignHorizontal === Alignments.Start)
			.addClass('text-center', block.meta.alignHorizontal === Alignments.Center)
			.addClass('text-right', block.meta.alignHorizontal === Alignments.End)
			.addClass('self-start', block.meta.alignVertical === Alignments.Top)
			.addClass('self-center', block.meta.alignVertical === Alignments.Middle)
			.addClass('self-end', block.meta.alignVertical === Alignments.Bottom)
			.addClass('normal-case', block.meta.transform === TextCapitals.NormalCase)
			.addClass('uppercase', block.meta.transform === TextCapitals.Uppercase)
			.addClass('lowercase', block.meta.transform === TextCapitals.Lowercase)
			.addClass('capitalize', block.meta.transform === TextCapitals.Capitalize)
			.build();
	};

	const select = (e) => {
		$selectedBlock = block;
		e.stopImmediatePropagation();
	}

	const update = () => {
		if (selected) {
			block = $selectedBlock;
		}
	}

	$: selected = $selectedBlock && $selectedBlock.id == block.id;
	$: $selectedBlock, update();
</script>

{#if $editing}
	<button on:click={(e) => select(e)} class={containerCss()}>
		{#if selected}
			<div in:fade="{{ duration: 200 }}" out:fade="{{ duration: 200 }}" class="absolute left-0 px-1 py-0.5 text-xs bg-accent-500 dark:bg-accent-700 text-white">
				Text block
			</div>
		{/if}
		{#if block.content}
			<span class={inputCss()}>{block.content}</span>
		{:else}
			<span class={inputCss()}>Placeholder</span>
		{/if}
	</button>
{:else}
	<div class={containerCss()}>
		<textarea 
			use:autoresize 
			bind:value={block.content}
			placeholder="Begin typing..." 
			disabled={$editing || $locked} 
			class={inputCss()} />
	</div>
{/if}