<script lang="ts">
	const YEAR = new Date().getFullYear()
	export let name = 'svelte.run'
	export let repository = 'svelterun'
	export let baseUrl = 'https://svelte.run'
</script>

<main>
	<h1><a href={baseUrl}>{name}</a></h1>
	<p class="bottom">

		&copy; {YEAR} <a href="https://berlette.com" rel="external noopener noreferrer" target="_blank">Nicholas Berlette</a>
		<a href="https://vercel.com" rel="external noopener noreferrer" target="_blank">Deployed with Vercel</a>
		<a href="https://github.com/{repository}">GitHub</a>
	</p>
</main>

<style>
	.light, :root {
		--foreground: #222;
		--background: #fff;
		--accent-1: #ff3e00;
		--accent-2: #666;
		--accent-3: #999;
		
		--dark-foreground: #f4f4f4;
		--dark-background: #111;
		--dark-accent-1: #ff3e00;
		--dark-accent-2: #999;
		--dark-accent-3: #666;
	
		--shadow-sm-color: rgba(0,0,0,0.1);
		--shadow-sm: 0 2px 1px var(--shadow-sm-color);

	}
	.dark, .dark :root {
		--foreground: var(--dark-foreground);
		--background: var(--dark-background);
		--accent-1: var(--dark-accent-1);
		--accent-2: var(--dark-accent-2);
		--accent-3: var(--dark-accent-3);
	}
	@media (prefers-color-scheme: dark) {
		:root {
			--foreground: var(--dark-foreground);
        	        --background: var(--dark-background);
                	--accent-1: var(--dark-accent-1);
                	--accent-2: var(--dark-accent-2);
                	--accent-3: var(--dark-accent-3);
		}

	}
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
		text-transform: lowercase;
	}
		.bottom a {
			color: var(--foreground, #222);
			text-decoration: underline;
			text-decoration-color: var(--accent-1, #ff3e00);
			cursor: pointer;
			transition: all .3s ease-in;
			text-transform: lowercase;
		}
		.bottom a:hover {
			color: var(--accent-1, #ff3e00);
			text-shadow: var(--shadow-sm);
		}
		.bottom a:not(:first-child)::before {
			color: var(--accent-2, #666);
			text-decoration: none;
			cursor: default;
			content: "•";
			margin-left: 1rem;
			margin-right: 1rem;
		}

	main {
		text-align: center;
		padding: 1em;
		max-width: 320px;
		margin: 0 auto;
	}

	h1 {
		color: var(--accent-1);
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
		h1 a {
			text-decoration: none;
			color: var(--accent-1) !important;
			transition: all .3s ease-in;
		}
	
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
