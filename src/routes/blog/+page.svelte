<script>
	export let data;
	const { posts } = data;
	console.log('data', posts);
</script>

<div class="container mx-auto">
	<h1>BLOG</h1>
	<div class="grid grid-cols-4 gap-4">
		{#each posts as post}
			<div id={post.id}>{post.title}</div>
		{/each}
	</div>
</div>
