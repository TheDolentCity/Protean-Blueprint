<script>
	import { brightness } from '../../../stores/themeStore';
	import { BrightnessHighFill, MoonFill } from 'svelte-bootstrap-icons';

	function toggleDarkMode() {
		$brightness = $brightness == 'bright' ? 'dark' : 'bright';
	}
</script>

<button on:click={toggleDarkMode} 
		class="flex p-3 items-center justify-center font-semibold rounded-lg shadow-lg text-base-900 dark:text-base-100 active:text-opacity-50 motion-safe:transition motion-safe:duration-200"
		class:bright="{$brightness == 'bright'}"
		class:dark="{$brightness == 'dark'}">
	{#if $brightness == "dark"}
		<MoonFill />
	{:else}
		<BrightnessHighFill />
	{/if}
</button>

<style lang="postcss">
	.bright {
		@apply bg-gradient-to-tr from-yellow-600 via-amber-400 to-amber-200;
	}
	.dark {
		@apply bg-gradient-to-br from-sky-200 via-sky-700 to-slate-800;
	}
</style>