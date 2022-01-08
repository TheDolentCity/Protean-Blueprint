<script>
	import { fade } from 'svelte/transition';
	import { autoresize } from 'svelte-textarea-autoresize';
	import { selectedBlock } from '$lib/stores/fileStore';
	import { editing, locked } from '$lib/stores/editorStore';
	import { CssBuilder } from '$lib/builders/cssBuilder';
	import { TextTypes } from '$lib/enums/textTypes';
	import { TextAlignments } from '$lib/enums/textAlignments';
import { TextTransforms } from '$lib/enums/textTransforms';

	export let block;

	$: selected = $selectedBlock && $selectedBlock.id == block.id;

	$: containerCss = () => {
		return new CssBuilder()
			.addClass('group isolation relative flex justify-center border border-opacity-0 outline-none mst')
			.addClass('border-opacity-100 border-accent-500 dark:border-accent-700', selected)
			.build();
	};
	
	$: inputCss = () => {
		return new CssBuilder()
			.addClass('w-full resize-none outline-none break-words mst')
			.addClass('block-input', !$editing)
			.addClass('p-2 rounded bg-base-50 dark:bg-base-900', $editing)
			.addClass('type-display', block.meta.type === TextTypes.H1)
			.addClass('type-title-large', block.meta.type === TextTypes.H2)
			.addClass('type-title', block.meta.type === TextTypes.H3)
			.addClass('type-subtitle', block.meta.type === TextTypes.H4)
			.addClass('type-body-large', block.meta.type === TextTypes.H5)
			.addClass('type-body-strong', block.meta.type === TextTypes.H6)
			.addClass('type-body', block.meta.type === TextTypes.P)
			.addClass('text-left', block.meta.align === TextAlignments.Left)
			.addClass('text-center', block.meta.align === TextAlignments.Center)
			.addClass('text-right', block.meta.align === TextAlignments.Right)
			.addClass('text-justify', block.meta.align === TextAlignments.Justify)
			.addClass('normal-case', block.meta.transform === TextTransforms.NormalCase)
			.addClass('uppercase', block.meta.transform === TextTransforms.Uppercase)
			.addClass('lowercase', block.meta.transform === TextTransforms.Lowercase)
			.addClass('capitalize', block.meta.transform === TextTransforms.Capitalize)
			.build();
	};

	const update = () => {
		if (selected) {
			block = $selectedBlock;
		}
	}

	$: $selectedBlock, update();
</script>

{#if $editing}
	<button on:click={() => $selectedBlock = block} class={containerCss()}>
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