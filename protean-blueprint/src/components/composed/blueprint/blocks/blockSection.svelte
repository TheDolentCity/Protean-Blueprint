<script>
	import { editing } from '$lib/stores/editorStore';
	import { selectedBlock } from '$lib/stores/fileStore';
	import { CssBuilder } from '$lib/builders/cssBuilder';
	import HorizontalAddBlock from './horizontalAddBlock.svelte';
	import Block from '../block.svelte';

	export let block;

	const isValidBlocks = () => {
		return block.content && Array.isArray(block.content);
	}

	$: hasNestedBlocks = (b) => {
		return b.content && Array.isArray(b.content);
	};

	$: sectionCss = () => {
		return new CssBuilder()
			.addClass('isolation relative grid grid-cols-12 grid-flow-col-dense gap-2 border border-opacity-0 outline-none mst')
			.addClass('border-opacity-100 border-accent-500 dark:border-accent-700', selected)
			.build();
	};

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
		{#each Array(block.meta.columns) as _, i}
			<HorizontalAddBlock bind:block column={i+1} />
		{/each}
		{#if hasNestedBlocks(block)}
			{#if !isValidBlocks()}
				<span class="">Error!</span>
			{:else}
				{#each block.content as b}
					<Block bind:block={b} />
					<HorizontalAddBlock bind:block column={b.meta.column} />
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