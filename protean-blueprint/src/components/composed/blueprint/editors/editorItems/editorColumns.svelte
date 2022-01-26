<script>
	import { selectedBlock } from '$lib/stores/fileStore';
	import Accordian from '../../../../../components/generic/accordian/accordian.svelte';

	export let open = false;
</script>

{#if $selectedBlock?.meta}
	<Accordian title="Columns" open={open} expandCss="p-1">
		<div class="flex flex-wrap px-2 pb-2">
			<label class="">
				<div class="pt-1.5 pb-0.5 text-xs uppercase">Column Start</div>
				<input type="number" bind:value={$selectedBlock.meta.columnStart} min="1" max="13" class="p-1 type-focus raise-5 focus:raise-10 mst" />
			</label>
			<label class="">
				<div class="pt-1.5 pb-0.5 text-xs uppercase">Column End</div>
				<input type="number" bind:value={$selectedBlock.meta.columnEnd} min="1" max="13" class="p-1 type-focus raise-5 focus:raise-10 mst" />
			</label>
		</div>
	</Accordian>
{/if}
