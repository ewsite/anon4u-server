<script>
	import { onMount } from 'svelte';
	export let className = String();
	export let heading = false;
	export let fullscreen = false;

	export let direction = String('col');
	export let itemsToCenter = false;
	$: defaultDirection = direction === 'col';
</script>

<section class:yoimiya={heading} class:nilou={fullscreen} class={className}>
	<div class:furina={defaultDirection} class:ayaka={itemsToCenter}>
		<slot />
	</div>
</section>

<style lang="postcss">
	div {
		@apply container
            flex
            mx-auto
            min-h-screen
            overflow-x-hidden;
	}

	section {
		@apply min-h-screen
            flex
            overflow-x-hidden;
	}

	div.furina {
		@apply flex-col;
	}

	div:not(.furina) {
		@apply flex-row;
	}
	div.ayaka {
		@apply justify-center items-center;
	}
	section:first-child.nilou > div {
		@apply p-0
            max-w-full
            w-full;
	}
</style>
