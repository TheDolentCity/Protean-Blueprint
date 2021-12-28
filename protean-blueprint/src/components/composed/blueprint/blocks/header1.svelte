<script>
	import { autoresize } from 'svelte-textarea-autoresize'
	import { BlockTypes } from '$lib/blockTypes';

    export let block;
</script>

<textarea
	use:autoresize
	bind:value={block.content}
	placeholder="Begin typing..."
	class="block-input resize-none"
	class:header1={block.type === BlockTypes.Header1}
	class:header2={block.type === BlockTypes.Header2}
	class:header3={block.type === BlockTypes.Header3}
	class:header4={block.type === BlockTypes.Header4}
	class:header5={block.type === BlockTypes.Header5}
	class:header6={block.type === BlockTypes.Header6}
	class:paragraph={block.type === BlockTypes.Paragraph} />

<style type="postcss">
	.header1 {
		@apply type-display;
	}
	.header2 {
		@apply type-title-large;
	}
	.header3 {
		@apply type-title;
	}
	.header4 {
		@apply type-subtitle;
	}
	.header5 {
		@apply type-body-large;
	}
	.header6 {
		@apply type-body-strong;
	}
	.paragraph {
		@apply type-body;
	}
</style>