<script>
	import { AlignBottom, AlignCenter, AlignEnd, AlignMiddle, AlignStart, AlignTop } from 'svelte-bootstrap-icons';
	import { selectedBlock } from '$lib/stores/fileStore';
	import { CssBuilder } from '$lib/builders/cssBuilder';
	import { Alignments } from '$lib/enums/alignments';
	import Accordian from '../../../../../components/generic/accordian/accordian.svelte';

	export let open = false;

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
</script>

{#if $selectedBlock?.meta}
	<Accordian title="Alignment" expandCss="p-1" open={open}>
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
{/if}
