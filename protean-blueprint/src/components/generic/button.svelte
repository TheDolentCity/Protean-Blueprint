<script>
	import { brightness, temperature } from '../../lib/stores/themeStore';

	export let primary = false;
	export let secondary = false;
	export let stealth = false;
	export let circular = false;
	export let iconBefore = false;
	export let iconAfter = false;
</script>

<button
	class:primary-neutral={primary && $brightness !== 'dark' && $temperature === 'neutral'}
	class:primary-neutral-dark={primary && $brightness === 'dark' && $temperature === 'neutral'}
	class:primary-cool={primary && $brightness !== 'dark' && $temperature === 'cool'}
	class:primary-cool-dark={primary && $brightness === 'dark' && $temperature === 'cool'}
	class:primary-warm={primary && $brightness !== 'dark' && $temperature === 'warm'}
	class:primary-warm-dark={primary && $brightness === 'dark' && $temperature === 'warm'}
	class:secondary-neutral={secondary && $brightness !== 'dark' && $temperature === 'neutral'}
	class:secondary-neutral-dark={secondary && $brightness === 'dark' && $temperature === 'neutral'}
	class:secondary-cool={secondary && $brightness !== 'dark' && $temperature === 'cool'}
	class:secondary-cool-dark={secondary && $brightness === 'dark' && $temperature === 'cool'}
	class:secondary-warm={secondary && $brightness !== 'dark' && $temperature === 'warm'}
	class:secondary-warm-dark={secondary && $brightness === 'dark' && $temperature === 'warm'}
	class:stealth-neutral={stealth && $brightness !== 'dark' && $temperature === 'neutral'}
	class:stealth-neutral-dark={stealth && $brightness === 'dark' && $temperature === 'neutral'}
	class:stealth-cool={stealth && $brightness !== 'dark' && $temperature === 'cool'}
	class:stealth-cool-dark={stealth && $brightness === 'dark' && $temperature === 'cool'}
	class:stealth-warm={stealth && $brightness !== 'dark' && $temperature === 'warm'}
	class:stealth-warm-dark={stealth && $brightness === 'dark' && $temperature === 'warm'}
	class:not-circular={!circular}
	class:circular>
	{#if iconBefore}
		<slot name="icon" />
	{/if}

	<slot />

	{#if iconAfter}
		<slot name="icon" />
	{/if}
</button>

<style lang="postcss">
	button {
		@apply font-semibold shadow-xl active:shadow-none active:text-opacity-80;
	}
	/* Primary Button Colors */
	.primary-neutral {
		@apply bg-black text-zinc-100 hover:bg-zinc-900 active:bg-zinc-800;
	}
	.primary-neutral-dark {
		@apply bg-white text-zinc-900 hover:bg-zinc-100 active:bg-zinc-200;
	}
	.primary-cool {
		@apply bg-black text-slate-100 hover:bg-slate-900 active:bg-slate-800;
	}
	.primary-cool-dark {
		@apply bg-white text-slate-900 hover:bg-slate-100 active:bg-slate-200;
	}
	.primary-warm {
		@apply bg-black text-stone-100 hover:bg-stone-900 active:bg-stone-800;
	}
	.primary-warm-dark {
		@apply bg-white text-stone-900 hover:bg-stone-100 active:bg-stone-200;
	}
	/* Secondary Button Colors */
	.secondary-neutral {
		@apply bg-zinc-800 text-zinc-100 hover:bg-zinc-700 active:bg-zinc-600;
	}
	.secondary-neutral-dark {
		@apply bg-zinc-200 text-zinc-900 hover:bg-zinc-300 active:bg-zinc-400;
	}
	.secondary-cool {
		@apply bg-slate-800 text-slate-100 hover:bg-slate-700 active:bg-slate-600;
	}
	.secondary-cool-dark {
		@apply bg-slate-200 text-slate-900 hover:bg-slate-300 active:bg-slate-400;
	}
	.secondary-warm {
		@apply bg-stone-800 text-stone-100 hover:bg-stone-700 active:bg-stone-600;
	}
	.secondary-warm-dark {
		@apply bg-stone-200 text-stone-900 hover:bg-stone-300 active:bg-stone-400;
	}
	/* Stealth Button Colors */
	.stealth-neutral {
		@apply text-zinc-100 hover:bg-zinc-900 hover:bg-opacity-5 active:bg-opacity-10;
	}
	.stealth-neutral-dark {
		@apply text-zinc-900 hover:bg-zinc-200 hover:bg-opacity-5 active:bg-opacity-10;
	}
	.stealth-cool {
		@apply text-slate-100 hover:bg-slate-800 hover:bg-opacity-5 active:bg-opacity-10;
	}
	.stealth-cool-dark {
		@apply text-slate-900 hover:bg-slate-200 hover:bg-opacity-5 active:bg-opacity-10;
	}
	.stealth-warm {
		@apply text-stone-100 hover:bg-stone-800 hover:bg-opacity-5 active:bg-opacity-10;
	}
	.stealth-warm-dark {
		@apply text-stone-900 hover:bg-stone-200 hover:bg-opacity-5 active:bg-opacity-10;
	}
	/* Other Button Attributes */
	.not-circular {
		@apply px-3 py-2 rounded;
	}
	.circular {
		@apply p-3 rounded-lg;
	}
</style>
