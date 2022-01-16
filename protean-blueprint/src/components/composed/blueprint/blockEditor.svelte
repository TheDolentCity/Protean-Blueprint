<script>
	import { editing } from '$lib/stores/editorStore';
	import { selectedBlock } from '$lib/stores/fileStore';
	import { BlockTypes } from '$lib/enums/blockTypes';
	import BlockTextEditor from './editors/blockTextEditor.svelte';
import { fly } from 'svelte/transition';

	$: $editing, $selectedBlock = null;
</script>

{#if $editing}
	<div in:fly="{{ x: 50, duration: 200 }}" out:fly="{{ x: 50, duration: 200 }}" class="flex-none flex flex-col w-80 h-full border-l border-base-200 dark:border-base-800 bg-white dark:bg-base-900 mst">
		{#if !$selectedBlock?.type}
			<p>No selected type</p>
		{:else if $selectedBlock.type === BlockTypes.Section}
			<p>No editor</p>
		{:else if $selectedBlock.type === BlockTypes.Text}
			<BlockTextEditor />
		{:else}
			<p>No editor</p>
		{/if}
	</div>
{/if}