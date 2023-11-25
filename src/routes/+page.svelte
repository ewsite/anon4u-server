<script>
	import { Button } from '$lib/components';
	export let data;
</script>

<svelte:head>
	<title>anon4u: an anonymous dm.</title>
	<meta property="og:url" content={data.url} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="an anonymous dm (more like q&a)." />
</svelte:head>
<div class="h-full flex items-center justify-center">
	<div class="p-4">
		<h2>anon4u</h2>
		<b>an anonymous <strike>q/a</strike> dm app</b>
	</div>
</div>
