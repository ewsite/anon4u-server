<script>
	/**
	 * @type {string | number | null}
	 */
	export let value = null;

	export let hiddenLabel = false;
	export let id = String();
	export let name = String();
	export let placeholder = String();
	export let notes = String();
	export let type = String();
	export let className = String();
	export let required = false;
	export let disabled = false;
</script>

<div class={className}>
	{#if !hiddenLabel}
		<label for={id}>
			<b>
				<slot>Untitled</slot>
			</b>
		</label>
	{/if}
	<div>
		{#if type === 'email'}
			<input type="email" bind:value id={id || null} {name} {placeholder} {required} {disabled}/>
		{:else if type === 'password'}
			<input type="password" bind:value id={id || null} {name} {placeholder} {required} {disabled}/>
		{:else if type === 'number'}
			<input type="number" bind:value id={id || null} {name} {placeholder} {required} {disabled}/>
		{:else}
			<input type="text" bind:value id={id || null} {name} {placeholder} {required} {disabled}/>
		{/if}
		{#if notes?.length}
			<p class="notes">
				{notes}
			</p>
		{/if}
	</div>
</div>

<style lang="postcss">
	input {
		@apply w-full
			text-neutral-800
            px-2
            py-2
            grow
            bg-transparent;
	}

	input:focus {
		@apply outline-none;
	}
	div:focus-within {
		@apply border-rose-600
            border-2;
	}

	div {
		@apply relative
            rounded
            p-0.5
            border-2
            border-transparent
			bg-slate-50 
			bg-opacity-10
            flex
            items-center
            outline-2;
	}
	.notes {
		@apply m-0
            px-4;
	}

	div > div {
		@apply w-full;
	}
</style>
