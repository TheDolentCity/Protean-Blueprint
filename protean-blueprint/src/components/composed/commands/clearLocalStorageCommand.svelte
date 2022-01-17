<script>
	import { fade } from 'svelte/transition';
	import { brightness } from '$lib/stores/themeStore';
	import { BrightnessHighFill, MoonFill, TrashFill } from 'svelte-bootstrap-icons';
import { activeFile, files, newFileForm, selectedBlock } from '$lib/stores/fileStore';

	let tooltipVisible = false;

	function setTooltipVisible() {
		tooltipVisible = true;
	}

	function setTooltipInvisible() {
		tooltipVisible = false;
	}

	function clearLocalStorage() {
		localStorage.clear();
		$selectedBlock = null;
		$activeFile = null;
		$files = [];
		$newFileForm = null;
		$brightness = "dark";
	}
</script>

<button
	on:mouseenter={setTooltipVisible}
	on:mouseleave={setTooltipInvisible}
	on:click={clearLocalStorage}
	class="command"
	transition:fade
>
	<TrashFill />
	{#if tooltipVisible}
		<div class="absolute left-14 px-3 py-1 whitespace-nowrap text-sm font-normal bg-white dark:bg-base-800 shadow-xl border border-base-200 dark:border-base-600 mst">
			Clear localStorage
		</div>
	{/if}
</button>