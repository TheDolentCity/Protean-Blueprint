<script>
	import { CaretDownFill, CaretRightFill } from "svelte-bootstrap-icons";
	import { fly } from "svelte/transition";

	export let title;
	export let open = false;
	export let expandCss;
</script>

<div class="">
	<button type="button" on:click={() => open = !open} class="flex w-full p-1 items-center border-t border-base-200 dark:border-base-800 focus:ring-2 focus:ring-inset focus:ring-accent-700 outline-none mst">
		<span class="mr-2 type-focus">
			{#if open}
				<CaretDownFill />
			{:else}
				<CaretRightFill />
			{/if}
		</span>
		<span class="mr-2 font-mono type-focus text-sm">{title}</span>
	</button>
	{#if open}
		<div in:fly="{{ y: -15, duration: 100 }}" out:fly="{{ y: -15, duration: 100 }}" class={expandCss}>
			<slot />
		</div>
	{/if}
</div>