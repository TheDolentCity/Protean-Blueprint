<script>
	import { editing } from '$lib/stores/editorStore';
	import { selectedBlock } from '$lib/stores/fileStore';
	import { BlockTypes } from '$lib/enums/blockTypes';
	import BlockTextEditor from './editors/blockTextEditor.svelte';
import { fly } from 'svelte/transition';

	$: $editing, $selectedBlock = null;
</script>

{#if $editing}
	<div in:fly="{{ x: 50, duration: 200 }}" out:fly="{{ x: 50, duration: 200 }}" class="flex-shrink">
		<div class="flex w-full mb-3 items-center justify-between">
			<h3>Editor</h3>
		</div>
		<div class="flex flex-col h-full py-2 space-y-8">
			{#if !$selectedBlock?.type}
				<h4>No selected type</h4>
			{:else if $selectedBlock.type === BlockTypes.Section}
			<!-- content here -->
			{:else if $selectedBlock.type === BlockTypes.Text}
				<BlockTextEditor />
			{:else}
				<!-- else content here -->
			{/if}
		</div>
	</div>
{/if}