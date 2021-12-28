<script>
    export let block;
</script>

<input 
    bind:value={block.content}
    type="text"
    placeholder="Begin typing..."
    class="type-body-large block-input" />