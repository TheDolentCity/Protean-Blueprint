<script>
	import { autoresize } from 'svelte-textarea-autoresize';
	import { editing } from '$lib/stores/editorStore';
	import { BlockTypes } from '$lib/blockTypes';
	import { TextTypes } from '$lib/textTypes';
	import { CssBuilder } from '$lib/builders/cssBuilder';

	export let block;

	$: conditionalCss = () => {
		return new CssBuilder()
			.addClass('block-input resize-none')
			.addClass('type-display', block.type === BlockTypes.Text && block.meta.type === TextTypes.H1)
			.addClass('type-title-large', block.type === BlockTypes.Text && block.meta.type === TextTypes.H2)
			.addClass('type-title', block.type === BlockTypes.Text && block.meta.type === TextTypes.H3)
			.addClass('type-subtitle', block.type === BlockTypes.Text && block.meta.type === TextTypes.H4)
			.addClass('type-body-large', block.type === BlockTypes.Text && block.meta.type === TextTypes.H5)
			.addClass('type-body-strong', block.type === BlockTypes.Text && block.meta.type === TextTypes.H6)
			.addClass('type-body', block.type === BlockTypes.Text && block.meta.type === TextTypes.P)
			.build();
	};
</script>

{#if $editing}
	<div class="flex z-10 mt-4 mb-1 px-2 rounded-xl shadow-lg bg-white dark:bg-base-900 border border-base-200 dark:border-base-800">
		<button on:click={() => block.meta.type = TextTypes.H1} class="btn-stealth btn-icon">H1</button>
		<button on:click={() => block.meta.type = TextTypes.H2} class="btn-stealth btn-icon">H2</button>
		<button on:click={() => block.meta.type = TextTypes.H3} class="btn-stealth btn-icon">H3</button>
		<button on:click={() => block.meta.type = TextTypes.H4} class="btn-stealth btn-icon">H4</button>
		<button on:click={() => block.meta.type = TextTypes.H5} class="btn-stealth btn-icon">H5</button>
		<button on:click={() => block.meta.type = TextTypes.H6} class="btn-stealth btn-icon">H6</button>
		<button on:click={() => block.meta.type = TextTypes.P} class="btn-stealth btn-icon">PA</button>
	</div>
{/if}

<textarea use:autoresize bind:value={block.content} placeholder="Begin typing..." disabled={$editing} class={conditionalCss()} />
