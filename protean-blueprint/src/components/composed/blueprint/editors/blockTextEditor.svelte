<script>
	import { fly } from 'svelte/transition';
	import { AlignBottom, AlignCenter, AlignEnd, AlignMiddle, AlignStart, AlignTop, Fonts, Justify, TextCenter, TextLeft, TextRight, Type } from 'svelte-bootstrap-icons';
	import { selectedBlock } from '$lib/stores/fileStore';
	import { CssBuilder } from '$lib/builders/cssBuilder';
	import { TextTypes } from '$lib/enums/textTypes';
	import { Alignments } from '$lib/enums/alignments';
	import { TextCapitals } from '$lib/enums/textCapitals';
	import Accordian from '../../../../components/generic/accordian/accordian.svelte';

	$: styleCss = (textType) => { return new CssBuilder()
		.addClass('btn btn-icon font-mono text-sm type-default hover:raise-5')
		.addClass('', $selectedBlock?.meta?.type && $selectedBlock.meta.type !== textType)
		.addClass('underline decoration-2 underline-offset-2 decoration-accent-600', $selectedBlock?.meta?.type && $selectedBlock.meta.type === textType)
		.build();
	};

	$: alignHorizontalCss = (alignType) => { return new CssBuilder()
		.addClass('btn btn-icon font-mono text-sm type-default hover:raise-5')
		.addClass('', $selectedBlock?.meta?.alignHorizontal && $selectedBlock.meta.alignHorizontal !== alignType)
		.addClass('relative pseudo-underline', $selectedBlock?.meta?.alignHorizontal && $selectedBlock.meta.alignHorizontal === alignType)
		.build();
	};

	$: alignVerticalCss = (alignType) => { return new CssBuilder()
		.addClass('btn btn-icon font-mono text-sm type-default hover:raise-5')
		.addClass('', $selectedBlock?.meta?.alignVertical && $selectedBlock.meta.alignVertical !== alignType)
		.addClass('relative pseudo-underline', $selectedBlock?.meta?.alignVertical && $selectedBlock.meta.alignVertical === alignType)
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
	<Accordian title="Columns" expandCss="p-1">
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
			<!-- Horizontal alignment -->
			<div class="px-2 pt-1.5 pb-2">
				<div class="text-xs uppercase">Horizontal</div>
				<div class="flex flex-wrap">
					<button on:click={() => $selectedBlock.meta.alignHorizontal = Alignments.Start} class={alignHorizontalCss(Alignments.Start)}>
						<AlignStart />
					</button>
					<button on:click={() => $selectedBlock.meta.alignHorizontal = Alignments.Center} class={alignHorizontalCss(Alignments.Center)}>
						<AlignCenter />
					</button>
					<button on:click={() => $selectedBlock.meta.alignHorizontal = Alignments.End} class={alignHorizontalCss(Alignments.End)}>
						<AlignEnd />
					</button>
				</div>
			</div>
			<!-- Vertical alignment -->
			<div class="px-2 pt-1.5 pb-2">
				<div class="text-xs uppercase">Vertical</div>
				<div class="flex flex-wrap">
					<button on:click={() => $selectedBlock.meta.alignVertical = Alignments.Top} class={alignVerticalCss(Alignments.Top)}>
						<AlignTop />
					</button>
					<button on:click={() => $selectedBlock.meta.alignVertical = Alignments.Middle} class={alignVerticalCss(Alignments.Middle)}>
						<AlignMiddle />
					</button>
					<button on:click={() => $selectedBlock.meta.alignVertical = Alignments.Bottom} class={alignVerticalCss(Alignments.Bottom)}>
						<AlignBottom />
					</button>
				</div>
			</div>
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
