<script>
    /**
	 * @type {String?}
	 */
     export let name = null;

     /**
	 * @type {String?}
	 */
      export let value = null;

     /**
	 * @type {String?}
	 */
     export let placeholder = null;

</script>

<textarea name={name ?? null} bind:value={value} placeholder={placeholder ?? null} rows="4"></textarea>

<style lang="postcss">
    textarea {
        
        @apply p-2 bg-neutral-700 rounded bg-opacity-50;
    }
</style>