<script>
	import { enhance } from '$app/forms';
	import { Loading, TextArea } from '$lib/components';
	import Button from '$lib/components/Button.svelte';
	import { fade, fly } from 'svelte/transition';
	export let data;
	let pendingQuestion = true;
	let success = false;
	let answer = String();
</script>

<svelte:head>
	<title>Message from anonymous user.</title>
	<meta property="og:url" content={data.url} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Hey, I have a message for you!" />
</svelte:head>

<div class="flex flex-col justify-between h-full space-y-4">
	{#if data?.questionData}
		{#key pendingQuestion || success}
			<form
				class="h-full flex items-center justify-center transition-all"
				method="POST"
				in:fly={{ x: 100, delay: 450 }}
				out:fade
				use:enhance={({ formData }) => {
					formData.set('questionId', String(data?.questionData?.id));

					pendingQuestion = false;
					return async ({ result }) => {
						if (result.type == 'failure') {
							pendingQuestion = true;
							return;
						}
						success = true;
					};
				}}
			>
				{#if pendingQuestion}
					<div class="h-full flex items-center justify-center transition-all w-full">
						<div class="space-y-4 w-full">
							<div class="flex flex-col space-y-4 p-4 rounded bg-slate-50">
								<b class="p-1 bg-slate-50 text-rose-600">Message from anonymous!</b>
								<hr>
								<b class="bg-rose-600 rounded-md p-2">{data.questionData.question}</b>
								<TextArea name="answer" bind:value={answer} placeholder="Reply..."/>
								<Button type="submit" color="primary">SEND</Button>
							</div>
						</div>
					</div>
				{:else if !pendingQuestion && !success}
					<div>
						<Loading></Loading>
					</div>
				{:else}
					<div class="space-y-4">
						<h1 class="">Thank you!</h1>
					</div>
				{/if}
			</form>
		{/key}
	{:else}
		<div class="grow flex items-center justify-center">
			<h1 class="">Question doesn't exists.</h1>
		</div>
	{/if}

</div>

<style lang="postcss"></style>
