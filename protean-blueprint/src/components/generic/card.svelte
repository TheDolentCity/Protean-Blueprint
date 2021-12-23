<script>
    import { brightness, temperature } from '../../lib/stores/themeStore';
</script>

<div class="card"
    class:colors-light-neutral="{$brightness === "light" && $temperature === "neutral"}"
    class:colors-light-cool="{$brightness === "light" && $temperature === "cool"}"
    class:colors-light-warm="{$brightness === "light" && $temperature === "warm"}"
    class:colors-dark-neutral="{$brightness === "dark" && $temperature === "neutral"}"
    class:colors-dark-cool="{$brightness === "dark" && $temperature === "cool"}"
    class:colors-dark-warm="{$brightness === "dark" && $temperature === "warm"}">
    <slot></slot>
</div>

<style lang="postcss">
    .card {
        @apply p-4 shadow-md;
    }
    .colors-light-neutral {
        @apply bg-zinc-50;
    }
    .colors-light-cool {
        @apply bg-slate-50;
    }
    .colors-light-warm {
        @apply bg-stone-50;
    }
    .colors-neutral {
        @apply bg-zinc-300;
    }
    .colors-neutral-cool {
        @apply bg-slate-300;
    }
    .colors-neutral-warm {
        @apply bg-stone-300;
    }
    .colors-dark-neutral {
        @apply bg-zinc-800;
    }
    .colors-dark-cool {
        @apply bg-slate-800;
    }
    .colors-dark-warm {
        @apply bg-stone-800;
    }
</style>