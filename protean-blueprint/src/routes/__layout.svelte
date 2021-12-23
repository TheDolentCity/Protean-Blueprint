<script>
    import { brightness } from '../stores/themeStore';
</script>

<div class={$brightness == "dark" ? "dark" : ""}>
    <div class="flex w-screen h-screen max-w-screen max-h-screen justify-between space-x-12 bg-base-100 dark:bg-base-900 text-base-900 dark:text-base-100 motion-safe:transition motion-safe:duration-200">
        <slot></slot>
    </div>
</div>

<style lang="postcss" global>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>