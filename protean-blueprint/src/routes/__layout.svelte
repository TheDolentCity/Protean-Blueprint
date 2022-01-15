<script>
    import "../styles/tailwind-output.css";
    import { brightness } from '../lib/stores/themeStore';
</script>

<div class={$brightness == "dark" ? "dark" : ""}>
	<div class="flex w-screen h-screen max-w-screen max-h-screen justify-start bg-base-100 dark:bg-base-1000 type-default mst">
		<slot></slot>
	</div>
</div>

