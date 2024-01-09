<script>
	export let data;
	const { users } = data;

</script>

<div class="container mx-auto">
	<div class="grid grid-cols-4 gap-4">
		<p>User List</p>
		{#each users as user }
		 <div>{user.name}</div>
		{/each}
	</div>
</div>
