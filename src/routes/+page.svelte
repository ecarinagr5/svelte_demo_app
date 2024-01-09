<script>
	// @ts-nocheck
  
	export let data;
  </script>
  
  <h1>Home</h1>
  
  {#each data.paginas as pagina}
	<p>{pagina.titulo}</p>
  {/each}
  