<script>
	import { selectedBlock } from '$lib/stores/fileStore';
	import { Justify, TextCenter, TextLeft, TextRight } from 'svelte-bootstrap-icons';
	import { TextTypes } from '$lib/enums/textTypes';
	import { TextAlignments } from '$lib/enums/textAlignments';
	import { fly } from 'svelte/transition';
import { CssBuilder } from '$lib/builders/cssBuilder';

	$: styleCss = (textType) => { return new CssBuilder()
		.addClass('btn-icon !font-normal')
		.addClass('btn-stealth', $selectedBlock?.meta?.type && $selectedBlock.meta.type !== textType)
		.addClass('btn-primary', $selectedBlock?.meta?.type && $selectedBlock.meta.type === textType)
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
			<button on:click={() => $selectedBlock.meta.type = TextTypes.P} class={styleCss(TextTypes.PA)}>PA</button>
		</div>
	</div>

	<div in:fly="{{ y: -50, duration: 200 }}" out:fly="{{ y: -50, duration: 200 }}" class="flex flex-col">
		<span class="type-focus font-semibold font-mono">Alignment</span>
		<div class="flex flex-wrap mt-2">
			<button on:click={() => $selectedBlock.meta.align = TextAlignments.Left} class="btn-stealth btn-icon">
				<TextLeft />
			</button>
			<button on:click={() => $selectedBlock.meta.align = TextAlignments.Center} class="btn-stealth btn-icon">
				<TextCenter />
			</button>
			<button on:click={() => $selectedBlock.meta.align = TextAlignments.Right} class="btn-stealth btn-icon">
				<TextRight />
			</button>
			<button on:click={() => $selectedBlock.meta.align = TextAlignments.Justify} class="btn-stealth btn-icon">
				<Justify />
			</button>
		</div>
	</div>
{/if}
