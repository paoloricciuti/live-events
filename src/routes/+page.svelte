<script lang="ts">
	const routes = Object.keys(
		import.meta.glob('./*/+page.svelte', {
			query: '?raw',
			eager: true
		})
	).map((route) => {
		const parts = route.split('/');
		parts.pop();
		return parts.join('/');
	});
</script>

<ul>
	{#each routes as route}
		<li><a href={route}>{route}</a></li>
	{/each}
</ul>

<style>
	ul,
	a {
		font-family: monospace;
		font-size: 2rem;
		color: white;
	}
</style>
