<script>
	import { fade } from 'svelte/transition';
	import { autoresize } from 'svelte-textarea-autoresize';
	import { editing, locked } from '$lib/stores/editorStore';
	import { CssBuilder } from '$lib/builders/cssBuilder';
	import { TextTypes } from '$lib/enums/textTypes';
	import { TextAlignments } from '$lib/enums/textAlignments';
	import { ColumnTypes } from '$lib/enums/columnTypes';
	import { Justify, TextCenter, TextLeft, TextRight } from 'svelte-bootstrap-icons';

	export let block;

	$: editBarVisible = false;

	const setEditBarVisible = () => {
		editBarVisible = true;
	}

	const setEditBarInvisible = () => {
		editBarVisible = false;
	}

	$: containerCss = () => {
		return new CssBuilder()
			.addClass('relative w-full flex justify-center')
			.addClass('col-span-12', block.meta.columns === ColumnTypes.Full)
			.addClass('col-span-6', block.meta.columns === ColumnTypes.Half)
			.addClass('col-span-4', block.meta.columns === ColumnTypes.Third)
			.addClass('col-span-3', block.meta.columns === ColumnTypes.Fourth)
			.build();
	};

	$: inputCss = () => {
		return new CssBuilder()
			.addClass('block-input w-full resize-none')
			.addClass('type-display', block.meta.type === TextTypes.H1)
			.addClass('type-title-large', block.meta.type === TextTypes.H2)
			.addClass('type-title', block.meta.type === TextTypes.H3)
			.addClass('type-subtitle', block.meta.type === TextTypes.H4)
			.addClass('type-body-large', block.meta.type === TextTypes.H5)
			.addClass('type-body-strong', block.meta.type === TextTypes.H6)
			.addClass('type-body', block.meta.type === TextTypes.P)
			.addClass('text-left', block.meta.align === TextAlignments.Left)
			.addClass('text-center', block.meta.align === TextAlignments.Center)
			.addClass('text-right', block.meta.align === TextAlignments.Right)
			.addClass('text-justify', block.meta.align === TextAlignments.Justify)
			.build();
	};
</script>

<div on:mouseenter={setEditBarVisible} on:mouseleave={setEditBarInvisible} class={containerCss()}>
	{#if $editing && editBarVisible}
		<div in:fade="{{ duration: 100 }}" out:fade="{{ duration: 100 }}" class="absolute bottom-full flex flex-wrap z-10 p-2 rounded-xl shadow-lg bg-white dark:bg-base-900 border border-base-200 dark:border-base-800">
			<button on:click={() => block.meta.columns = ColumnTypes.Full} class="btn-stealth btn-icon diagonal-fractions">1/1</button>
			<button on:click={() => block.meta.columns = ColumnTypes.Half} class="btn-stealth btn-icon diagonal-fractions">1/2</button>
			<button on:click={() => block.meta.columns = ColumnTypes.Third} class="btn-stealth btn-icon diagonal-fractions">1/3</button>
			<button on:click={() => block.meta.columns = ColumnTypes.Fourth} class="btn-stealth btn-icon diagonal-fractions">1/4</button>
	
			<!-- <div class="w-0.5 px-0.5 bg-base-200 dark:bg-base-800" /> -->
			
			<button on:click={() => block.meta.type = TextTypes.H1} class="btn-stealth btn-icon">H1</button>
			<button on:click={() => block.meta.type = TextTypes.H2} class="btn-stealth btn-icon">H2</button>
			<button on:click={() => block.meta.type = TextTypes.H3} class="btn-stealth btn-icon">H3</button>
			<button on:click={() => block.meta.type = TextTypes.H4} class="btn-stealth btn-icon">H4</button>
			<button on:click={() => block.meta.type = TextTypes.H5} class="btn-stealth btn-icon">H5</button>
			<button on:click={() => block.meta.type = TextTypes.H6} class="btn-stealth btn-icon">H6</button>
			<button on:click={() => block.meta.type = TextTypes.P} class="btn-stealth btn-icon">PA</button>
	
			<!-- <div class="w-0.5 px-0.5 bg-base-200 dark:bg-base-800" /> -->
	
			<button on:click={() => block.meta.align = TextAlignments.Left} class="btn-stealth btn-icon">
				<TextLeft />
			</button>
			<button on:click={() => block.meta.align = TextAlignments.Center} class="btn-stealth btn-icon">
				<TextCenter />
			</button>
			<button on:click={() => block.meta.align = TextAlignments.Right} class="btn-stealth btn-icon">
				<TextRight />
			</button>
			<button on:click={() => block.meta.align = TextAlignments.Justify} class="btn-stealth btn-icon">
				<Justify />
			</button>
	
			<!-- <div class="w-0.5 px-0.5 bg-base-200 dark:bg-base-800" /> -->
		</div>
	{/if}
	
	<textarea 
		use:autoresize 
		bind:value={block.content}
		placeholder="Begin typing..." 
		disabled={$editing || $locked} 
		class={inputCss()} />
</div>