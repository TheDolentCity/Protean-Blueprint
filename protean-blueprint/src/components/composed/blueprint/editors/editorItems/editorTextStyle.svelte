<script>
	import { selectedBlock } from '$lib/stores/fileStore';
	import { CssBuilder } from '$lib/builders/cssBuilder';
	import { TextTypes } from '$lib/enums/textTypes';
	import Accordian from '../../../../../components/generic/accordian/accordian.svelte';

	export let open = false;

	$: textStyleCss = (textType) => { return new CssBuilder()
		.addClass('btn btn-icon font-mono text-sm type-default hover:raise-5')
		.addClass('', $selectedBlock?.meta?.type && $selectedBlock.meta.type !== textType)
		.addClass('underline decoration-2 underline-offset-2 decoration-accent-600', $selectedBlock?.meta?.type && $selectedBlock.meta.type === textType)
		.build();
	};
</script>

{#if $selectedBlock?.meta}
	<Accordian title="Text style" open={open} expandCss="p-1">
		<div class="flex flex-wrap">
			<button on:click={() => $selectedBlock.meta.type = TextTypes.H1} class={textStyleCss(TextTypes.H1)}>H1</button>
			<button on:click={() => $selectedBlock.meta.type = TextTypes.H2} class={textStyleCss(TextTypes.H2)}>H2</button>
			<button on:click={() => $selectedBlock.meta.type = TextTypes.H3} class={textStyleCss(TextTypes.H3)}>H3</button>
			<button on:click={() => $selectedBlock.meta.type = TextTypes.H4} class={textStyleCss(TextTypes.H4)}>H4</button>
			<button on:click={() => $selectedBlock.meta.type = TextTypes.H5} class={textStyleCss(TextTypes.H5)}>H5</button>
			<button on:click={() => $selectedBlock.meta.type = TextTypes.P} class={textStyleCss(TextTypes.P)}>PA</button>
		</div>
	</Accordian>
{/if}
