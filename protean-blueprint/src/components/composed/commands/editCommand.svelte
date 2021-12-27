<script>
	import { fade } from 'svelte/transition';
	import { editing } from '$lib/stores/editorStore';
	import { FileRichtextFill, PencilFill } from 'svelte-bootstrap-icons';

	let tooltipVisible = false;

	function setTooltipVisible() {
		tooltipVisible = true;
	}

	function setTooltipInvisible() {
		tooltipVisible = false;
	}

	function toggleDarkMode() {
		$editing = !$editing;
	}
</script>

<button 
	on:mouseenter={setTooltipVisible}
	on:mouseleave={setTooltipInvisible}
	on:click={toggleDarkMode}
	on:click={toggleDarkMode}
	class={$editing ? 
			"command bg-gradient-to-tr from-orange-300 via-orange-100 to-orange-100 dark:from-stone-900 dark:via-orange-700 dark:to-orange-700" :
			"command bg-gradient-to-b from-slate-400 via-slate-300 to-slate-300 dark:from-slate-700 dark:via-slate-500 dark:to-slate-500"}
	transition:fade
>
	{#if $editing}
		<PencilFill />
	{:else}
		<FileRichtextFill />
	{/if}

	{#if tooltipVisible}
		<div class="absolute left-16 px-3 py-1 whitespace-nowrap text-sm font-normal bg-base-100 dark:bg-base-900 rounded shadow-xl border border-base-200 dark:border-base-800 motion-safe:transition motion-safe:duration-200">
			{#if $editing}
				Edit mode
			{:else}
				Play mode
			{/if}
		</div>
	{/if}
</button>