<script>
	import { selectedBlock } from '$lib/stores/fileStore';
	import { CssBuilder } from '$lib/builders/cssBuilder';
	import { TextCapitals } from '$lib/enums/textCapitals';
	import Accordian from '../../../../../components/generic/accordian/accordian.svelte';

	export let open = false;

	$: transformCss = (transformType) => { return new CssBuilder()
		.addClass('btn btn-text w-full font-mono text-sm type-default hover:raise-5')
		.addClass('', $selectedBlock?.meta?.transform && $selectedBlock.meta.transform !== transformType)
		.addClass('underline decoration-2 underline-offset-2 decoration-accent-600', $selectedBlock?.meta?.transform && $selectedBlock.meta.transform === transformType)
		.build();
	};
</script>

{#if $selectedBlock?.meta}
	<Accordian title="Capitals" open={open} expandCss="p-1">
		<div class="flex flex-wrap">
			<button on:click={() => $selectedBlock.meta.transform = TextCapitals.NormalCase} class={transformCss(TextCapitals.NormalCase)}>Normal case</button>
			<button on:click={() => $selectedBlock.meta.transform = TextCapitals.Uppercase} class={transformCss(TextCapitals.Uppercase)}>Uppercase</button>
			<button on:click={() => $selectedBlock.meta.transform = TextCapitals.Lowercase} class={transformCss(TextCapitals.Lowercase)}>Lowercase</button>
			<button on:click={() => $selectedBlock.meta.transform = TextCapitals.Capitalize} class={transformCss(TextCapitals.Capitalize)}>Capitalize</button>
		</div>
	</Accordian>
{/if}