<script>
	export let data;
	const { albums } = data;
</script>


	<h1>Albums</h1>
	<div class="grid grid-cols-4 gap-4">
		{#each albums as album}
			<div id={album.id}>{album.title}</div>
		{/each}
	</div>
