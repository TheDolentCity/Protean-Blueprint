<script>
	import { BlockTypes } from '$lib/enums/blockTypes';
	import { Arrow90degLeft, ArrowDown, ArrowReturnLeft, ArrowUp } from 'svelte-bootstrap-icons';

	export let block;
</script>

<div class="col-span-full flex p-4 items-center justify-between border border-base-200 dark:border-base-800 mst">
	<select bind:value={block.type} class="mr-3 p-2 rounded-lg type-body-strong bg-base-100 dark:bg-base-900 border border-base-200 dark:border-base-800">
		<option value={BlockTypes.SectionFull} class="appearance-none p-4 type-body">
			{BlockTypes.SectionFull.name}
		</option>
		<option value={BlockTypes.SectionHalf} class="appearance-none p-4 type-body">
			{BlockTypes.SectionHalf.name}
		</option>
		<option value={BlockTypes.Header1} class="appearance-none p-4 type-body">
			{BlockTypes.Header1.name}
		</option>
		<option value={BlockTypes.Header2} class="appearance-none p-4 type-body">
			{BlockTypes.Header2.name}
		</option>
		<option value={BlockTypes.Header3} class="appearance-none p-4 type-body">
			{BlockTypes.Header3.name}
		</option>
		<option value={BlockTypes.Header4} class="appearance-none p-4 type-body">
			{BlockTypes.Header4.name}
		</option>
		<option value={BlockTypes.Header5} class="appearance-none p-4 type-body">
			{BlockTypes.Header5.name}
		</option>
		<option value={BlockTypes.Header6} class="appearance-none p-4 type-body">
			{BlockTypes.Header6.name}
		</option>
		<option value={BlockTypes.Paragraph} class="appearance-none p-4 type-body">
			{BlockTypes.Paragraph.name}
		</option>
	</select>
	<div class="flex space-x-2">
		<button class="btn-secondary btn-icon">
			<ArrowUp />
		</button>
		<button class="btn-secondary btn-icon">
			<ArrowDown />
		</button>
		<button class="btn-secondary btn-icon">
			<Arrow90degLeft />
		</button>
		<button class="btn-secondary btn-icon">
			<ArrowReturnLeft />
		</button>
	</div>
</div>
