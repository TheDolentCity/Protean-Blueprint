<script>
	import { fly } from 'svelte/transition';
	import { editing } from '$lib/stores/editorStore';
	import Blocks from '../blocks.svelte';

	export let block;

	$: hasNestedBlocks = (b) => {
		return b.content && Array.isArray(b.content);
	};
</script>

{#if $editing}
	<div in:fly="{{ y: -100, duration: 200 }}" out:fly="{{ y: -100, duration: 200 }}" class="col-span-full flex flex-col justify-center p-4 border-t border-base-200 dark:border-base-800 mst">
		<div class="flex flex-wrap z-10 p-2 justify-center rounded-xl shadow-lg bg-white dark:bg-base-900 border border-base-200 dark:border-base-800 mst">
			<button on:click={() => block.meta.columns = 1} class="btn-stealth btn-icon">C1</button>
			<button on:click={() => block.meta.columns = 2} class="btn-stealth btn-icon">C2</button>
			<button on:click={() => block.meta.columns = 3} class="btn-stealth btn-icon">C3</button>
			<button on:click={() => block.meta.columns = 4} class="btn-stealth btn-icon">C4</button>
		</div>
	</div>
{/if}
{#if hasNestedBlocks(block)}
	<Blocks bind:blocks={block.content} />
{/if}