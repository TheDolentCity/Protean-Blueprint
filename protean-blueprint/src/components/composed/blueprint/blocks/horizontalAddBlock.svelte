<script>
	import { v4 as uuidv4 } from 'uuid';
	import { fade, fly } from 'svelte/transition';
	import { editing } from '$lib/stores/editorStore';
	import { TextTypes } from '$lib/enums/textTypes';
	import { TextAlignments } from '$lib/enums/textAlignments';
	import { ColumnTypes } from '$lib/enums/columnTypes';
	import { BlockTypes } from '$lib/enums/blockTypes';
	import { Link, Type, UiChecks, UiRadios } from 'svelte-bootstrap-icons';
	import { clickOutside } from '$lib/events/clickOutside';

	export let block;

	let blockBarVisible;

	const toggleBlockBarVisibility = () => {
		blockBarVisible = !blockBarVisible;
	}

	const createBlock = (type) => {
		console.log("Block1\n" + JSON.stringify(block, null, 2));
		console.log("Content1\n" + JSON.stringify(block.content, null, 2));
		block = { ...block,
			content: [...block.content,
			{
				id: uuidv4(),
				type: BlockTypes.Text,
				meta: {
					type: TextTypes.P,
					align: TextAlignments.Left,
					columns: ColumnTypes.Full
				},
				content: ""
			}]
		};
		console.log("Block2\n" + JSON.stringify(block, null, 2));
		console.log("Content2\n" + JSON.stringify(block.content, null, 2));
	};
</script>

{#if $editing}
	<button in:fade="{{ duration: 200 }}" out:fade="{{ duration: 200 }}" on:click={toggleBlockBarVisibility} class="group relative col-span-full flex h-0.5 hover:h-5 focus:h-5 focus-within:h-5 my-1 font-mono justify-center bg-accent-500 dark:bg-accent-700 outline-none mst">
		<span class="invisible group-hover:visible group-focus:visible group-focus-within:h-5 py-0.5 text-xs uppercase text-white dark:text-white">
			Add block
		</span>
		{#if blockBarVisible}
			<div use:clickOutside on:click_outside={() => blockBarVisible = false} in:fly="{{ y: -50, duration: 200 }}" out:fly="{{ y: -50, duration: 200 }}" class="absolute z-30 top-8 grid grid-cols-4 gap-2 p-2 rounded-xl shadow-xl bg-white dark:bg-black border border-base-200 dark:border-base-800">
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