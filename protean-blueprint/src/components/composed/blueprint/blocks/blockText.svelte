<script>
	import { fade, fly } from 'svelte/transition';
	import { autoresize } from 'svelte-textarea-autoresize';
	import { editing, locked } from '$lib/stores/editorStore';
	import { CssBuilder } from '$lib/builders/cssBuilder';
	import { BlockTypes } from '$lib/enums/blockTypes';
	import { TextTypes } from '$lib/enums/textTypes';
	import { TextAlignments } from '$lib/enums/textAlignments';
	import { Justify, TextCenter, TextLeft, TextRight } from 'svelte-bootstrap-icons';

	export let block;

	$: editBarVisible = false;

	const setEditBarVisible = () => {
		editBarVisible = true;
	}

	const setEditBarInvisible = () => {
		editBarVisible = false;
	}

	$: conditionalCss = () => {
		return new CssBuilder()
			.addClass('block-input w-full resize-none')
			.addClass('type-display', block.type === BlockTypes.Text && block.meta.type === TextTypes.H1)
			.addClass('type-title-large', block.type === BlockTypes.Text && block.meta.type === TextTypes.H2)
			.addClass('type-title', block.type === BlockTypes.Text && block.meta.type === TextTypes.H3)
			.addClass('type-subtitle', block.type === BlockTypes.Text && block.meta.type === TextTypes.H4)
			.addClass('type-body-large', block.type === BlockTypes.Text && block.meta.type === TextTypes.H5)
			.addClass('type-body-strong', block.type === BlockTypes.Text && block.meta.type === TextTypes.H6)
			.addClass('type-body', block.type === BlockTypes.Text && block.meta.type === TextTypes.P)
			.addClass('text-left', block.type === BlockTypes.Text && block.meta.align === TextAlignments.Left)
			.addClass('text-center', block.type === BlockTypes.Text && block.meta.align === TextAlignments.Center)
			.addClass('text-right', block.type === BlockTypes.Text && block.meta.align === TextAlignments.Right)
			.addClass('text-justify', block.type === BlockTypes.Text && block.meta.align === TextAlignments.Justify)
			.build();
	};
</script>

<div on:mouseenter={setEditBarVisible} on:mouseleave={setEditBarInvisible} class="relative w-full flex justify-center">
	{#if $editing && editBarVisible}
		<div in:fade="{{ duration: 100 }}" out:fade="{{ duration: 100 }}" class="absolute bottom-full flex flex-wrap z-10 p-2 rounded-xl shadow-lg bg-white dark:bg-base-900 border border-base-200 dark:border-base-800">
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
		class={conditionalCss()} />
</div>