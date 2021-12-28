<script>
	import { autoresize } from 'svelte-textarea-autoresize'

    export let block;
</script>

<textarea
	use:autoresize
    bind:value={block.content}
    rows={2}
    placeholder="Begin typing..."
    class="type-body block-input resize-none" />