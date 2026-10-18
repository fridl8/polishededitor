<script lang="ts">
	import './layout.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>Polished Editor - Cheating/Save Editing Tool for Polished Crystal</title>
	<meta
		name="description"
		content="Cheating tool for Polished Crystal that works by editing your save file via an intuitive UI. Edit Pokemon Stats, Nicknames, Bag Contents, Pokedex Data, and more!"
	/>
</svelte:head>

{@render children()}
