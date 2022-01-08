<script>
    import "../styles/tailwind-output.css";
    import { brightness } from '../lib/stores/themeStore';
</script>

<div class={$brightness == "dark" ? "dark" : ""}>
    <div class="flex w-screen h-screen max-w-screen max-h-screen pl-3 pr-6 py-6 justify-between space-x-12 bg-base-100 dark:bg-black/90 text-base-900 dark:text-base-100 motion-safe:transition motion-safe:duration-200">
        <slot></slot>
    </div>
</div>

