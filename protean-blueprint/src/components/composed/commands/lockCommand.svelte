<script>
	import { fade } from 'svelte/transition';
	import { locked } from '$lib/stores/editorStore';
	import { FileRichtextFill, LockFill, PencilFill, UnlockFill } from 'svelte-bootstrap-icons';

	let tooltipVisible = false;

	function setTooltipVisible() {
		tooltipVisible = true;
	}

	function setTooltipInvisible() {
		tooltipVisible = false;
	}

	function toggleDarkMode() {
		$locked = !$locked;
	}
</script>

<button 
	on:mouseenter={setTooltipVisible}
	on:mouseleave={setTooltipInvisible}
	on:click={toggleDarkMode}
	on:click={toggleDarkMode}
	class={$locked ? 
			"command bg-gradient-to-b from-stone-300 via-stone-200 to-stone-400 dark:from-stone-600 dark:via-stone-500 dark:to-stone-800" :
			"command bg-gradient-to-tr from-red-600 via-red-300 to-red-100 dark:from-red-900 dark:via-red-500 dark:to-red-300"}
	transition:fade
>
	{#if $locked}
		<LockFill />
	{:else}
		<UnlockFill />
	{/if}

	{#if tooltipVisible}
		<div class="absolute left-14 px-3 py-1 whitespace-nowrap text-sm font-normal bg-white dark:bg-base-800 shadow-xl border border-base-200 dark:border-base-600 mst">
			{#if $locked}
				Locked mode
			{:else}
				Unlocked mode
			{/if}
		</div>
	{/if}
</button>