<script>
    export let block;
</script>

<textarea
    bind:value={block.content}
    rows={2}
    placeholder="Begin typing..."
    class="type-body block-input" />