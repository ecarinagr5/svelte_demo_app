<script>
	// @ts-nocheck

	import '../main.css';
	import NavBar from '../component/NavBar/NavBar.svelte';
	export let data;
</script>

<div class="container mx-auto">
	<NavBar routes={data} />
</div>

<div class="container mx-auto px-4 mt-5">
	<slot />
</div>
