<script>
	import { v4 as uuidv4 } from 'uuid';
	import { fade, fly } from 'svelte/transition';
	import { editing } from '$lib/stores/editorStore';
	import { TextTypes } from '$lib/enums/textTypes';
	import { TextAlignments } from '$lib/enums/textAlignments';
	import { BlockTypes } from '$lib/enums/blockTypes';
	import { Link, Type, UiChecks, UiRadios } from 'svelte-bootstrap-icons';
	import { clickOutside } from '$lib/events/clickOutside';
	import { TextCapitals } from '$lib/enums/textCapitals';
	import { CssBuilder } from '$lib/builders/cssBuilder';
import { Alignments } from '$lib/enums/alignments';

	export let block;
	export let columnStart;
	export let columnEnd;

	let blockBarVisible;

	$: css = () => {
		return new CssBuilder()
			.addClass('group relative flex h-0.5 hover:h-5 focus:h-5 focus-within:h-5 my-1 font-mono justify-center bg-accent-500 dark:bg-accent-700 outline-none mst')
			.addClass('col-start-1', columnStart === 1)
			.addClass('col-start-2', columnStart === 2)
			.addClass('col-start-3', columnStart === 3)
			.addClass('col-start-4', columnStart === 4)
			.addClass('col-start-5', columnStart === 5)
			.addClass('col-start-6', columnStart === 6)
			.addClass('col-start-7', columnStart === 7)
			.addClass('col-start-8', columnStart === 8)
			.addClass('col-start-9', columnStart === 9)
			.addClass('col-start-10', columnStart === 10)
			.addClass('col-start-11', columnStart === 11)
			.addClass('col-start-12', columnStart === 12)
			.addClass('col-start-13', columnStart === 13)
			.addClass('col-end-1', columnEnd === 1)
			.addClass('col-end-2', columnEnd === 2)
			.addClass('col-end-3', columnEnd === 3)
			.addClass('col-end-4', columnEnd === 4)
			.addClass('col-end-5', columnEnd === 5)
			.addClass('col-end-6', columnEnd === 6)
			.addClass('col-end-7', columnEnd === 7)
			.addClass('col-end-8', columnEnd === 8)
			.addClass('col-end-9', columnEnd === 9)
			.addClass('col-end-10', columnEnd === 10)
			.addClass('col-end-11', columnEnd === 11)
			.addClass('col-end-12', columnEnd === 12)
			.addClass('col-end-13', columnEnd === 13)
			.build();
	};

	const toggleBlockBarVisibility = () => {
		blockBarVisible = !blockBarVisible;
	}

	const createBlock = (type) => {
		// console.log("Block1\n" + JSON.stringify(block, null, 2));
		// console.log("Content1\n" + JSON.stringify(block.content, null, 2));
		block = { ...block,
			content: [...block.content,
			{
				id: uuidv4(),
				type: BlockTypes.Text,
				meta: {
					type: TextTypes.P,
					alignHorizontal: Alignments.Start,
					alignVertical: Alignments.Top,
					transform: TextCapitals.NormalCase,
					columnStart: columnStart,
					columnEnd: columnEnd
				},
				content: ""
			}]
		};
		// console.log("Block2\n" + JSON.stringify(block, null, 2));
		// console.log("Content2\n" + JSON.stringify(block.content, null, 2));
	};
</script>

{#if $editing}
	<button in:fade="{{ duration: 200 }}" out:fade="{{ duration: 200 }}" on:click={toggleBlockBarVisibility} class={css()}>
		<span class="invisible group-hover:visible group-focus:visible group-focus-within:h-5 py-0.5 text-xs uppercase text-white dark:text-white">
			Add block
		</span>
		{#if blockBarVisible}
			<div use:clickOutside on:click_outside={() => blockBarVisible = false} in:fly="{{ y: -50, duration: 200 }}" out:fly="{{ y: -50, duration: 200 }}" class="absolute z-30 top-8 grid grid-cols-4 gap-2 shadow-xl bg-base-50 dark:bg-base-900 border border-base-200 dark:border-base-800">
				<button on:click={() => createBlock(BlockTypes.Text)} class="btn-stealth btn-icon flex-col justify-center">
					<Type />
					<span class="mt-1 font-semibold type-focus">Text</span>
				</button>
				<button on:click={() => createBlock(BlockTypes.Text)} class="btn-stealth btn-icon flex-col justify-center">
					<Link />
					<span class="mt-1 font-semibold type-focus">Link</span>
				</button>
				<button on:click={() => createBlock(BlockTypes.Text)} class="btn-stealth btn-icon flex-col justify-center">
					<UiChecks />
					<span class="mt-1 font-semibold type-focus">Checks</span>
				</button>
				<button on:click={() => createBlock(BlockTypes.Text)} class="btn-stealth btn-icon flex-col justify-center">
					<UiRadios />
					<span class="mt-1 font-semibold type-focus">Radio</span>
				</button>
			</div>
		{/if}
	</button>
{/if}