<script>
import { CaretDownFill, CaretRightFill } from "svelte-bootstrap-icons";
import { fly } from "svelte/transition";

export let title;
let open;
	
</script>

<div class="">
	<button on:click={() => open = !open} class="flex w-full p-1 items-center border-t border-base-200 dark:border-base-800">
		<span class="mr-2 type-focus">
			{#if open}
				<CaretDownFill />
			{:else}
				<CaretRightFill />
			{/if}
		</span>
		<span class="font-mono type-focus text-sm">{title}</span>
	</button>
	{#if open}
		<div in:fly="{{ y: -15, duration: 100 }}" out:fly="{{ y: -15, duration: 100 }}" class="p-1">
			<slot />
		</div>
	{/if}
</div>