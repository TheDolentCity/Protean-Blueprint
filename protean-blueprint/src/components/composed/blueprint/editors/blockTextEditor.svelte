<script>
	import { fly } from 'svelte/transition';
	import { Fonts, Justify, TextCenter, TextLeft, TextRight, Type } from 'svelte-bootstrap-icons';
	import { selectedBlock } from '$lib/stores/fileStore';
	import { CssBuilder } from '$lib/builders/cssBuilder';
	import { TextTypes } from '$lib/enums/textTypes';
	import { TextAlignments } from '$lib/enums/textAlignments';
	import { TextTransforms } from '$lib/enums/textTransforms';

	$: styleCss = (textType) => { return new CssBuilder()
		.addClass('btn-icon !font-normal font-mono mst')
		.addClass('btn-stealth', $selectedBlock?.meta?.type && $selectedBlock.meta.type !== textType)
		.addClass('btn-primary', $selectedBlock?.meta?.type && $selectedBlock.meta.type === textType)
		.build();
	};

	$: alignCss = (alignType) => { return new CssBuilder()
		.addClass('btn-icon font-mono mst')
		.addClass('btn-stealth', $selectedBlock?.meta?.align && $selectedBlock.meta.align !== alignType)
		.addClass('btn-primary', $selectedBlock?.meta?.align && $selectedBlock.meta.align === alignType)
		.build();
	};

	$: transformCss = (transformType) => { return new CssBuilder()
		.addClass('btn-icon !font-normal font-mono mst')
		.addClass('btn-stealth', $selectedBlock?.meta?.transform && $selectedBlock.meta.transform !== transformType)
		.addClass('btn-primary', $selectedBlock?.meta?.transform && $selectedBlock.meta.transform === transformType)
		.build();
	};
</script>

{#if $selectedBlock?.type}
	<div in:fly="{{ y: -50, duration: 200 }}" out:fly="{{ y: -50, duration: 200 }}" class="flex flex-col">
		<span class="type-focus font-semibold font-mono">Style</span>
		<div class="flex flex-wrap mt-2">
			<button on:click={() => $selectedBlock.meta.type = TextTypes.H1} class={styleCss(TextTypes.H1)}>H1</button>
			<button on:click={() => $selectedBlock.meta.type = TextTypes.H2} class={styleCss(TextTypes.H2)}>H2</button>
			<button on:click={() => $selectedBlock.meta.type = TextTypes.H3} class={styleCss(TextTypes.H3)}>H3</button>
			<button on:click={() => $selectedBlock.meta.type = TextTypes.H4} class={styleCss(TextTypes.H4)}>H4</button>
			<button on:click={() => $selectedBlock.meta.type = TextTypes.H5} class={styleCss(TextTypes.H5)}>H5</button>
			<button on:click={() => $selectedBlock.meta.type = TextTypes.P} class={styleCss(TextTypes.P)}>PA</button>
		</div>
	</div>

	<div in:fly="{{ y: -50, duration: 200 }}" out:fly="{{ y: -50, duration: 200 }}" class="flex flex-col">
		<span class="type-focus font-semibold font-mono">Alignment</span>
		<div class="flex flex-wrap mt-2">
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
	</div>

	<div in:fly="{{ y: -50, duration: 200 }}" out:fly="{{ y: -50, duration: 200 }}" class="flex flex-col">
		<span class="type-focus font-semibold font-mono">Transform</span>
		<div class="flex flex-wrap mt-2">
			<button on:click={() => $selectedBlock.meta.transform = TextTransforms.NormalCase} class={transformCss(TextTransforms.NormalCase)}>
				<Fonts />
			</button>
			<button on:click={() => $selectedBlock.meta.transform = TextTransforms.Uppercase} class={transformCss(TextTransforms.Uppercase)}>AA</button>
			<button on:click={() => $selectedBlock.meta.transform = TextTransforms.Lowercase} class={transformCss(TextTransforms.Lowercase)}>aa</button>
			<button on:click={() => $selectedBlock.meta.transform = TextTransforms.Capitalize} class={transformCss(TextTransforms.Capitalize)}>Aa</button>
		</div>
	</div>
{/if}
