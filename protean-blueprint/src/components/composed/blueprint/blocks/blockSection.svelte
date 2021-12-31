<script>
	import { CssBuilder } from '$lib/builders/cssBuilder';
	import { ColumnTypes } from '$lib/enums/columnTypes';
	import HorizontalAddBlock from './horizontalAddBlock.svelte';
	import Block from '../block.svelte';
	import { editing } from '$lib/stores/editorStore';
	import { fade } from 'svelte/transition';

	export let block;

	$: editBoxVisible = false;

	const isValidBlocks = () => {
		return block.content && Array.isArray(block.content);
	}

	$: hasNestedBlocks = (b) => {
		return b.content && Array.isArray(b.content);
	};

	const focus = (e, boxVisible) => {
		editBoxVisible = boxVisible;
		e.preventDefault();
	}

	$: containerCss = () => {
		return new CssBuilder()
			.addClass('isolation relative flex justify-center border border-opacity-0 outline-none mst')
			.addClass('focus:border-opacity-100 focus:border-accent-500 dark:focus:border-accent-700', $editing && editBoxVisible)
			.addClass('col-span-12', block.meta.columns === ColumnTypes.Full)
			.addClass('col-span-4', block.meta.columns === ColumnTypes.Third)
			.addClass('col-span-3', block.meta.columns === ColumnTypes.Fourth)
			.addClass('col-start-1 col-end-6', block.meta.columns === ColumnTypes.Half && block.meta.position === 0)
			.addClass('col-start-7 col-end-12', block.meta.columns === ColumnTypes.Half && block.meta.position === 1)
			.build();
	};

	$: sectionCss = () => {
		return new CssBuilder()
			.addClass('grid grid-cols-12 w-full p-4 border-t border-base-200 dark:border-base-800 mst')
			.build();
	};
</script>

<div tabindex={$editing ? "0" : "-1"} on:focus={(e) => focus(e, true)} on:focusout={(e) => focus(e, false)} class={containerCss()}>
	{#if $editing && editBoxVisible}
		<div in:fade="{{ duration: 200 }}" out:fade="{{ duration: 200 }}" class="absolute z-30 left-0 px-1 py-0.5 text-xs bg-accent-500 dark:bg-accent-700 text-white">
			Section block
		</div>
	{/if}
	<div class={sectionCss()}>
		{#if $editing}
			<HorizontalAddBlock bind:block />
		{/if}
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
</div>