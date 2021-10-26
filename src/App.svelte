<script lang="ts">
	import Header from './Header.svelte'
	import Footer from './Footer.svelte'

	export let name = 'save.js'
	export let repository
	export let baseUrl = '/'
</script>

<svelte:head>
	<title>{name}</title>
</svelte:head>

<main>
	<Header url={baseUrl} text={name} class="text-shadow-sm hover:text-shadow-lg" />
	<Footer copyright="nberlette" repository={repository} sponsorUrl="https://vercel.com" sponsor="Runs on Vercel" />
</main>

<style lang="css" global windi:global windi:preflights:global windi:safelist:global>
	.light, :root {
		--foreground: #222;
		--background: linear-gradient(45deg, #fff, #eee);
		--accent-1: #ff3e00;
		--accent-2: #666;
		--accent-3: #999;
		
		--dark-foreground: #f4f4f4;
		--dark-background: linear-gradient(45deg, #000 0%, #123 80%, #000 150%);
		--dark-accent-1: #ff3e00;
		--dark-accent-2: #999;
		--dark-accent-3: #666;
	
		--shadow-sm-color: rgba(0,0,0,0.1);
		--shadow-sm: var(--shadow-sm, 0 2px 1px var(--shadow-sm-color));

	}
	.dark, .dark :root {
		--foreground: var(--dark-foreground);
		--background: var(--dark-background);
		--accent-1: var(--dark-accent-1);
		--accent-2: var(--dark-accent-2);
		--accent-3: var(--dark-accent-3);
	}
	a {
		transition: all 0.5s ease;
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

	:global(html), :global(body) {
		background: var(--background);
		color: var(--foreground);	
	}
	::selection {
		background-color: transparent;
		cursor: default;
		color: inherit;
	}
	main {
		text-align: center;
		padding: 1em;
		max-width: 320px;
		margin: 0 auto;
	}
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

</style>
