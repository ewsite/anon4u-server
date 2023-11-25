<script>
	import { Button } from '$lib/components';
	export let data;
</script>

<svelte:head>
	<title>anon4u: an anonymous dm.</title>
	<meta property="og:url" content={data.url} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="anon4u: an anonymous dm." />
	<meta property="og:description" content="Download anon4u for android (not available on iOS)." />
	<meta property="og:image" content="{data.baseUrl}/bgpattern.png" />
</svelte:head>
<div class="h-full flex items-center justify-center">
	<div class="p-4">
		<h2>anon4u</h2>
		<b>an anonymous <strike>q/a</strike> dm app</b>
		<div class="py-4">
			<Button
				color="primary"
				type="link"
				href="https://lkaktaupduyplarvdblz.supabase.co/storage/v1/object/sign/good-bucket/anon4u-0.0.1alpha.apk?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJnb29kLWJ1Y2tldC9hbm9uNHUtMC4wLjFhbHBoYS5hcGsiLCJpYXQiOjE3MDA4Nzk4MTgsImV4cCI6MTcwMzQ3MTgxOH0.TSEda7LPMJFUyKJjSnIDZAu8SKJlOeu9jPnuuag4GYo&t=2023-11-25T02%3A36%3A57.586Z"
				>Download Now!</Button
			>
		</div>
	</div>
</div>
