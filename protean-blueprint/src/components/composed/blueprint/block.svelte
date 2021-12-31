<script>
	import BlockText from './blocks/blockText.svelte';
	import { BlockTypes } from '$lib/enums/blockTypes';
	import BlockSection from './blocks/blockSection.svelte';

	export let block;

	$: isValidBlock = () => {
		return block?.type && BlockTypes[block.type?.name.split(' ').join('')];
	};
</script>

{#if !isValidBlock()}
	<span class="">Error!</span>
{:else if block.type === BlockTypes.Section}
	<BlockSection bind:block />
{:else if block.type === BlockTypes.Text}
	<BlockText bind:block />
{:else}
	<h1>Else</h1>
{/if}
