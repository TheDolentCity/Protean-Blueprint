<script>
    import { files } from '$lib/stores/filestore';
</script>

<div class="flex-none flex h-full max-h-full items-center justify-center p-3">
    <div class="flex-none flex flex-col px-3 py-2 space-y-2 bg-base-100 dark:bg-base-900 rounded-xl shadow-xl border border-gray-200 dark:border-gray-800 motion-safe:transition motion-safe:duration-200">
        {#each $files as file (file.id)}
            <div class="">
                <h2>{file.meta.name}</h2>
                <p>{file.meta.description}</p>
            </div>
        {/each}
    </div>
</div>