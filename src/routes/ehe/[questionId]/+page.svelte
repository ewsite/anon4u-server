<script>
	import { enhance } from "$app/forms";
    import { TextArea } from "$lib/components";
	import Button from "$lib/components/Button.svelte";
    export let data;

    let answer = String();
</script>



<div class="flex flex-col justify-between h-full space-y-4">
    <h3 class="text-rose-600 shadow-lg">anon4u</h3>
    {#if data?.questionData}
    <form method="POST" use:enhance={({ formData }) => {
        formData.set('questionId', String(data?.questionData?.id))
    }}>

        <div class="space-y-4 w-3/4 mx-auto">
            <div class="flex flex-col space-y-4">
                <b class="text-3xl bg-rose-600 p-2 rounded-md">Q: {data?.questionData?.question}?</b>
                <div class="flex space-x-4">
                    <b class="text-3xl">A:</b>
                    <div class="grow grid">
                        <TextArea name="answer" bind:value={answer}/>
                    </div>
                </div>
                <Button color="primary" type="submit">SEND</Button>
            </div>
        </div>
    </form>
    {:else}
    <div class="grow flex items-center justify-center">
        <h1 class="text-rose-700">Question doesn't exists.</h1>
    </div>
    {/if}

    <a href="/app">Get Standalone App here</a>
</div>

<style lang="postcss"></style>