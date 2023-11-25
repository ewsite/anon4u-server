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
	<title>anon4u: a question from an anonymous person.</title>
	<meta property="og:url" content={data.url} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Hey, I have a question for you!" />
	<meta property="og:description" content="Answer this question by clicking this link." />
	<meta property="og:image" content="{data.baseUrl}/question-bgpattern.png" />
</svelte:head>

<div class="flex flex-col justify-between h-full space-y-4">
	<h3 class="text-rose-600 shadow-lg">anon4u</h3>
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
							console.log('Cow');
							pendingQuestion = true;
							return;
						}
						success = true;
					};
				}}
			>
				{#if pendingQuestion}
					<div class="space-y-4 w-3/4">
						<div class="flex flex-col space-y-4">
							<b class="text-3xl bg-rose-600 p-2 rounded-md">Q: {data?.questionData?.question}?</b>
							<div class="flex space-x-4">
								<b class="text-3xl">A:</b>
								<div class="grow grid">
									<TextArea name="answer" bind:value={answer} />
								</div>
							</div>
							<Button color="primary" type="submit">SEND</Button>
						</div>
					</div>
				{:else if !pendingQuestion && !success}
					<div>
						<Loading></Loading>
					</div>
				{:else}
					<div>
						<h1 class="text-rose-600">Thank you!</h1>
					</div>
				{/if}
			</form>
		{/key}
	{:else}
		<div class="grow flex items-center justify-center">
			<h1 class="text-rose-700">Question doesn't exists.</h1>
		</div>
	{/if}

	<a href="/">Back to Homepage</a>
</div>

<style lang="postcss"></style>
