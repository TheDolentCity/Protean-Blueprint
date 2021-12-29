<script>
	import Blocks from './blocks.svelte';
	import BlockRoot from './blocks/blockRoot.svelte';
	import BlockText from './blocks/blockText.svelte';
	import { BlockTypes } from '$lib/enums/blockTypes';
	import { SectionTypes } from '$lib/enums/sectionTypes';

	export let block;

	$: isValidBlock = () => {
		return block?.type && BlockTypes[block.type?.name.split(' ').join('')];
	};

	$: hasNestedBlocks = (b) => {
		return b.content && Array.isArray(b.content);
	};
</script>

{#if !isValidBlock()}
	<span class="">Error!</span>
{:else if block.type === BlockTypes.Root}
	<BlockRoot bind:block />
{:else if block.type === BlockTypes.Section && block.meta.type === SectionTypes.Full}
	<div class="col-span-full flex flex-col p-4 border-t border-base-200 dark:border-base-800 mst">
		{#if hasNestedBlocks(block)}
			<Blocks bind:blocks={block.content} />
		{/if}
	</div>
{:else if block.type === BlockTypes.Section && block.meta.type === SectionTypes.Half}
	<div class="col-span-6 flex flex-col p-4 border-t border-base-200 dark:border-base-800 mst">
		{#if hasNestedBlocks(block)}
			<Blocks bind:blocks={block.content} />
		{/if}
	</div>
{:else if block.type === BlockTypes.Text}
	<BlockText bind:block />
{:else}
	<h1>Else</h1>
{/if}
