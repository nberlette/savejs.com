<script>
	export let name = 'svelte.run'
</script>

<main>
	<h1>{name}</h1>
	<p class="bottom">
		deployed with vercel &middot;  <a href="https://github.com/svelterun">github</a>
	</p>
</main>

<style>
	::selection {
		background-color: transparent;
		cursor: default;
		color: inherit;
	}
	.bottom {
		position: absolute;
		bottom: 2em;
		width: 100%;
		display: block;
		left: 0;
		text-align: center;
	}
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: lowercase;
		font-size: 6em;
		font-weight: 100;
		cursor: default;
		display: block;
		width: 100%;
		text-align: center;
		position: absolute;
		top: 0;
		left: 0;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>