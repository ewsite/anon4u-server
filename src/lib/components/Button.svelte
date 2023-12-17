<script>
	export let type = String();
	export let href = String();
	export let id = String();
	export let color = String();
	export let className = String();
	export let preventDefault = false;
	export let formaction = String();
	export let disabled = false;

</script>

{#if type === 'link'}
	{#if preventDefault}
		<a
			href={!disabled ? href : null}
			id={id || null}
			class={`${color} ${className}`}
			class:disabled
			on:click|preventDefault
			on:dblclick><slot /></a
		>
	{:else}
		<a
			href={!disabled ? href : null}
			id={id || null}
			class={`${color} ${className}`}
			class:disabled
			on:click
			on:dblclick><slot /></a
		>
	{/if}
{:else if type === 'submit'}
	<button
		id={id || null}
		class={`${color} ${className}`}
		class:disabled
		on:click
		on:dblclick
		formaction={formaction || null}
		{disabled}><slot /></button
	>
{:else}
	<button
		id={id || null}
		class={`${color} ${className}`}
		class:disabled
		on:click|preventDefault
		on:dblclick|preventDefault
		{disabled}><slot /></button
	>
{/if}

<style lang="postcss">
	a,
	button {
		@apply
        px-3
        py-1
		text-center
        rounded-md
        font-bold
        uppercase
        transition
		flex
		items-center
		justify-center
        duration-200
        shadow-sm;
	}
	.disabled {
		@apply cursor-not-allowed;
	}
	/* Colors -- Default Version */

	.primary:not(.disabled) {
		@apply bg-rose-600 text-slate-50 hover:bg-rose-700;
	}
	.primary.disabled {
		@apply bg-rose-500 text-slate-50;
	}
	.secondary:not(.disabled) {
		@apply bg-violet-500 text-slate-50 hover:bg-violet-600;
	}
	.secondary.disabled {
		@apply bg-violet-400 text-slate-50;
	}
	.warning:not(.disabled) {
		@apply bg-yellow-400 text-slate-50 hover:bg-yellow-500;
	}
	.warning.disabled {
		@apply bg-yellow-300 text-slate-50;
	}
	.success:not(.disabled) {
		@apply bg-green-500 text-slate-50 hover:bg-green-600;
	}
	.success.disabled {
		@apply bg-green-400 text-slate-50;
	}

	.error:not(.disabled) {
		@apply bg-red-500 text-slate-50 hover:bg-red-600;
	}
	.error.disabled {
		@apply bg-red-400 text-slate-50;
	}
	.plain:not(.disabled) {
		@apply bg-slate-950 bg-opacity-5;
	}

</style>
