<script>
	import { CssBuilder } from '$lib/builders/cssBuilder';
	import { ColumnTypes } from '$lib/enums/columnTypes';
	import HorizontalAddBlock from './horizontalAddBlock.svelte';
	import Block from '../block.svelte';
	import { editing } from '$lib/stores/editorStore';
	import { fade } from 'svelte/transition';
	import { selectedBlock } from '$lib/stores/fileStore';

	export let block;

	$: editBoxVisible = false;

	const isValidBlocks = () => {
		return block.content && Array.isArray(block.content);
	}

	$: hasNestedBlocks = (b) => {
		return b.content && Array.isArray(b.content);
	};

	$: sectionCss = () => {
		return new CssBuilder()
			.addClass('isolation relative grid gap-2 border border-opacity-0 outline-none mst')
			.addClass('border-opacity-100 border-accent-500 dark:border-accent-700', selected)
			.addClass('grid-cols-1', block.meta.columns === 1)
			.addClass('grid-cols-2', block.meta.columns === 2)
			.addClass('grid-cols-3', block.meta.columns === 3)
			.addClass('grid-cols-4', block.meta.columns === 4)
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
	<div class={sectionCss()}>
		<HorizontalAddBlock bind:block />
		{#if hasNestedBlocks(block)}
			{#if !isValidBlocks()}
				<span class="">Error!</span>
			{:else}
				{#each block.content as b}
					<Block bind:block={b} />
					<HorizontalAddBlock bind:block />
				{/each}
			{/if}
		{/if}
	</div>
{:else}
	<div class={sectionCss()}>
		{#if hasNestedBlocks(block)}
			{#if !isValidBlocks()}
				<span class="">Error!</span>
			{:else}
				{#each block.content as b}
					<Block bind:block={b} />
				{/each}
			{/if}
		{/if}
	</div>
{/if}