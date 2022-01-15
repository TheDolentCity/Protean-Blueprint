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
	class="command"
	transition:fade
>
	{#if $locked}
		<LockFill />
	{:else}
		<UnlockFill />
	{/if}

	{#if tooltipVisible}
		<div class="absolute left-14 px-3 py-1 whitespace-nowrap text-sm font-normal bg-white dark:bg-base-800 shadow-2xl border border-base-200 dark:border-base-600 mst">
			{#if $locked}
				Locked mode
			{:else}
				Unlocked mode
			{/if}
		</div>
	{/if}
</button>