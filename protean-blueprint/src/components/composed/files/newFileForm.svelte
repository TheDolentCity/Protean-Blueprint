<script>
	import { v4 as uuidv4 } from 'uuid';
	import { autoresize } from 'svelte-textarea-autoresize';
	import { files, newFileForm } from '$lib/stores/fileStore';
	import { BlockTypes } from '$lib/enums/blockTypes';
	import { DocumentSize } from '$lib/enums/documentSize';
	import { CssBuilder } from '$lib/builders/cssBuilder';
	import Accordian from '../../generic/accordian/accordian.svelte';
	import { ColumnTypes } from '$lib/enums/columnTypes';

	let meta = {
		name: "",
		description: "",
		documentSize: DocumentSize.A4
	};

	let blockData = {
		columns: 1
	}
	
	$: sizeLabel = (s) => {
		return new CssBuilder()
			.addClass('relative flex aspect-[1/1.25] items-center justify-center border mst')
			.addClass('border-default', meta.documentSize !== s)
			.addClass('border-accent', meta.documentSize === s)
			.build();
		};
	
	$: columnLabel = (c) => {
		return new CssBuilder()
			.addClass('relative flex aspect-[1/1.25] items-center justify-center border mst')
			.addClass('border-default', blockData.columns !== c)
			.addClass('border-accent', blockData.columns === c)
			.build();
		};

	const cancelForm = (e) => {
		e.preventDefault();
		$newFileForm = null;
	}

	const submitForm = (e) => {
		e.preventDefault();
		$files = [...$files, 
			{
				id: uuidv4(),
				type: BlockTypes.Root,
				meta: meta,
				content: []
			}];
		$newFileForm = null;
		localStorage.setItem("files", JSON.stringify($files));
	}
</script>

{#if $newFileForm !== null}
	<form class="flex flex-col w-full h-full bg-white dark:bg-base-900 mst">
		<div class="flex-grow flex flex-col overflow-y-auto">
			<Accordian title="File details" open={true} expandCss="flex flex-col px-3 pt-2 pb-4 space-y-2">
				<label class="">
					<div class="pb-1 text-xs uppercase">Name</div>
					<input type="text" bind:value={meta.name} placeholder="fill this out" class="w-full p-1 type-focus raise-5 focus:raise-10 mst" />
				</label>
				<label class="">
					<div class="pb-1 text-xs uppercase">Description</div>
					<textarea use:autoresize bind:value={meta.description} placeholder="fill this out" rows={1} class="w-full p-1 type-focus raise-5 focus:raise-10 resize-none mst" />
				</label>
			</Accordian>
			<Accordian title="Layout" open={true} expandCss="flex flex-col px-3 pt-2 pb-4 space-y-2">
				<!-- Document Size -->
				<div class="pt-2 pb-1 text-xs uppercase">Document size</div>
				<div class="grid grid-cols-4 gap-4 w-full text-left">
					<div class="text-center">
						<label for="A4" class={sizeLabel(DocumentSize.A4)}>
							<input type="radio" name="documentSize" id="A4" bind:group={meta.documentSize} value={DocumentSize.A4} class="appearance-none">
							<span>{DocumentSize.A4.name}</span>
						</label>
						<span class="text-xs">1 : 1.4142</span>
					</div>
					<div class="text-center">
						<label for="Letter" class={sizeLabel(DocumentSize.Letter)}>
							<input type="radio" name="documentSize" id="Letter" bind:group={meta.documentSize} value={DocumentSize.Letter} class="appearance-none">
							<span>{DocumentSize.Letter.name}</span>
						</label>
						<span class="text-xs">1 : 1.2941</span>
					</div>
					<div class="text-center">
						<label for="Poster" class={sizeLabel(DocumentSize.Poster)}>
							<input type="radio" name="documentSize" id="Poster" bind:group={meta.documentSize} value={DocumentSize.Poster} class="appearance-none">
							<span>{DocumentSize.Poster.name}</span>
						</label>
						<span class="text-xs">1 : 1.5</span>
					</div>
					<div class="text-center">
						<label for="Square" class={sizeLabel(DocumentSize.Square)}>
							<input type="radio" name="documentSize" id="Square" bind:group={meta.documentSize} value={DocumentSize.Square} class="appearance-none">
							<span>{DocumentSize.Square.name}</span>
						</label>
						<span class="text-xs">1 : 1</span>
					</div>
				</div>
				<!-- Document Columns -->
				<!-- <div class="pt-2 pb-1 text-xs uppercase">Columns</div>
				<div class="grid grid-cols-4 gap-4 w-full text-left">
					<div class="text-center">
						<label for="Full" class={columnLabel(1)}>
							<input type="radio" name="columns" id="Full" bind:group={blockData.columns} value={1} class="appearance-none">
							<div class="grid grid-cols-4 w-full h-full p-2">
								<span class="col-span-full h-full bg-base-300 dark:bg-base-700 mst"></span>
							</div>
						</label>
						<span class="text-xs">1</span>
					</div>
					<div class="text-center">
						<label for="Half" class={columnLabel(2)}>
							<input type="radio" name="columns" id="Half" bind:group={blockData.columns} value={2} class="appearance-none">
							<div class="grid grid-cols-4 gap-2 w-full h-full p-2">
								<div class="col-span-2 h-full bg-base-300 dark:bg-base-700 mst"></div>
								<div class="col-span-2 h-full bg-base-300 dark:bg-base-700 mst"></div>
							</div>
						</label>
						<span class="text-xs">2</span>
					</div>
					<div class="text-center">
						<label for="Third" class={columnLabel(3)}>
							<input type="radio" name="columns" id="Third" bind:group={blockData.columns} value={3} class="appearance-none">
							<div class="grid grid-cols-3 gap-2 w-full h-full p-2">
								<div class="col-span-1 h-full bg-base-300 dark:bg-base-700 mst"></div>
								<div class="col-span-1 h-full bg-base-300 dark:bg-base-700 mst"></div>
								<div class="col-span-1 h-full bg-base-300 dark:bg-base-700 mst"></div>
							</div>
						</label>
						<span class="text-xs">3</span>
					</div>
					<div class="text-center">
						<label for="Fourth" class={columnLabel(4)}>
							<input type="radio" name="columns" id="Fourth" bind:group={blockData.columns} value={4} class="appearance-none">
							<div class="grid grid-cols-4 gap-2 w-full h-full p-2">
								<div class="col-span-1 h-full bg-base-300 dark:bg-base-700 mst"></div>
								<div class="col-span-1 h-full bg-base-300 dark:bg-base-700 mst"></div>
								<div class="col-span-1 h-full bg-base-300 dark:bg-base-700 mst"></div>
								<div class="col-span-1 h-full bg-base-300 dark:bg-base-700 mst"></div>
							</div>
						</label>
						<span class="text-xs">2</span>
					</div>
				</div> -->
			</Accordian>
		</div>
		<div class="flex place-self-end p-3 space-x-4 items-stretch">
			<button on:click={cancelForm} type="button" class="btn btn-text btn-secondary">
				Cancel
			</button>
			<button on:click={submitForm} type="submit" class="btn btn-text btn-accent">
				Submit
			</button>
		</div>
	</form>
{/if}