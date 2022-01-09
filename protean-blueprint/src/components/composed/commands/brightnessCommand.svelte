<script>
	import { fade } from 'svelte/transition';
	import { brightness } from '$lib/stores/themeStore';
	import { BrightnessHighFill, MoonFill } from 'svelte-bootstrap-icons';

	let tooltipVisible = false;

	function setTooltipVisible() {
		tooltipVisible = true;
	}

	function setTooltipInvisible() {
		tooltipVisible = false;
	}

	function toggleDarkMode() {
		$brightness = $brightness == 'bright' ? 'dark' : 'bright';
	}
</script>

<button
	on:mouseenter={setTooltipVisible}
	on:mouseleave={setTooltipInvisible}
	on:click={toggleDarkMode}
	class={$brightness == 'bright'
		? 'command bg-gradient-to-tr from-yellow-600 via-amber-400 to-amber-200'
		: $brightness == 'dark'
		? 'command bg-gradient-to-br from-sky-200 via-sky-700 to-slate-800'
		: 'command'}
	transition:fade
>
	{#if $brightness == 'dark'}
		<MoonFill />
	{:else}
		<BrightnessHighFill />
	{/if}

	{#if tooltipVisible}
		<div class="absolute left-14 px-3 py-1 whitespace-nowrap text-sm font-normal bg-white dark:bg-base-800 shadow-xl border border-base-200 dark:border-base-600 mst">
			{#if $brightness == 'dark'}
				Dark mode
			{:else if $brightness == 'bright'}
				Light mode
			{/if}
		</div>
	{/if}
</button>