<script>
	import { fly } from 'svelte/transition';
	import { Fonts, Justify, TextCenter, TextLeft, TextRight, Type } from 'svelte-bootstrap-icons';
	import { selectedBlock } from '$lib/stores/fileStore';
	import { CssBuilder } from '$lib/builders/cssBuilder';
	import { TextTypes } from '$lib/enums/textTypes';
	import { TextAlignments } from '$lib/enums/textAlignments';
	import { TextCapitals } from '$lib/enums/textCapitals';
	import Accordian from '../../../../components/generic/accordian/accordian.svelte';

	$: styleCss = (textType) => { return new CssBuilder()
		.addClass('btn btn-icon font-mono text-sm type-default hover:raise-5')
		.addClass('', $selectedBlock?.meta?.type && $selectedBlock.meta.type !== textType)
		.addClass('underline decoration-2 underline-offset-2 decoration-accent-600', $selectedBlock?.meta?.type && $selectedBlock.meta.type === textType)
		.build();
	};

	$: alignCss = (alignType) => { return new CssBuilder()
		.addClass('btn btn-icon font-mono text-sm type-default hover:raise-5')
		.addClass('', $selectedBlock?.meta?.align && $selectedBlock.meta.align !== alignType)
		.addClass('relative pseudo-underline', $selectedBlock?.meta?.align && $selectedBlock.meta.align === alignType)
		.build();
	};

	$: transformCss = (transformType) => { return new CssBuilder()
		.addClass('btn btn-text w-full font-mono text-sm type-default hover:raise-5')
		.addClass('', $selectedBlock?.meta?.transform && $selectedBlock.meta.transform !== transformType)
		.addClass('underline decoration-2 underline-offset-2 decoration-accent-600', $selectedBlock?.meta?.transform && $selectedBlock.meta.transform === transformType)
		.build();
	};
</script>

{#if $selectedBlock?.type}
	<Accordian title="Style" expandCss="p-1">
		<div class="flex flex-wrap">
			<button on:click={() => $selectedBlock.meta.type = TextTypes.H1} class={styleCss(TextTypes.H1)}>H1</button>
			<button on:click={() => $selectedBlock.meta.type = TextTypes.H2} class={styleCss(TextTypes.H2)}>H2</button>
			<button on:click={() => $selectedBlock.meta.type = TextTypes.H3} class={styleCss(TextTypes.H3)}>H3</button>
			<button on:click={() => $selectedBlock.meta.type = TextTypes.H4} class={styleCss(TextTypes.H4)}>H4</button>
			<button on:click={() => $selectedBlock.meta.type = TextTypes.H5} class={styleCss(TextTypes.H5)}>H5</button>
			<button on:click={() => $selectedBlock.meta.type = TextTypes.P} class={styleCss(TextTypes.P)}>PA</button>
		</div>
	</Accordian>
	<Accordian title="Alignment" expandCss="p-1">
		<div class="flex flex-wrap">
			<button on:click={() => $selectedBlock.meta.align = TextAlignments.Left} class={alignCss(TextAlignments.Left)}>
				<TextLeft />
			</button>
			<button on:click={() => $selectedBlock.meta.align = TextAlignments.Center} class={alignCss(TextAlignments.Center)}>
				<TextCenter />
			</button>
			<button on:click={() => $selectedBlock.meta.align = TextAlignments.Right} class={alignCss(TextAlignments.Right)}>
				<TextRight />
			</button>
			<button on:click={() => $selectedBlock.meta.align = TextAlignments.Justify} class={alignCss(TextAlignments.Justify)}>
				<Justify />
			</button>
		</div>
	</Accordian>
	<Accordian title="Capitals" expandCss="p-1">
		<div class="flex flex-wrap">
			<button on:click={() => $selectedBlock.meta.transform = TextCapitals.NormalCase} class={transformCss(TextCapitals.NormalCase)}>Normal case</button>
			<button on:click={() => $selectedBlock.meta.transform = TextCapitals.Uppercase} class={transformCss(TextCapitals.Uppercase)}>Uppercase</button>
			<button on:click={() => $selectedBlock.meta.transform = TextCapitals.Lowercase} class={transformCss(TextCapitals.Lowercase)}>Lowercase</button>
			<button on:click={() => $selectedBlock.meta.transform = TextCapitals.Capitalize} class={transformCss(TextCapitals.Capitalize)}>Capitalize</button>
		</div>
	</Accordian>
{/if}
