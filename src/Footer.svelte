<script lang="ts">
  export let repository = 'nberlette/savejs.com';
  export let copyright = '@nberlette';
  export let copyrightYear = new Date().getFullYear();
  export let copyrightUrl = 'https://berlette.com';
  export let sponsor = 'Deployed with Vercel';
  export let sponsorUrl;
</script>

<style lang="css" windi windi:preflights windi:safelist>
  .bottom {
    font-size: 1.5em;
		position: absolute;
		bottom: 2em;
		width: 100%;
		display: block;
		left: 0;
		text-align: center;
		text-transform: lowercase;
	}
		.bottom .link {
			color: var(--foreground, #222);
			text-transform: lowercase;
		}
		.bottom .link:not(:first-child)::before {
			color: var(--accent-2, #666) !important;
			content: "•";
			padding-left: 0.8rem;
			padding-right: 1rem;
      text-decoration: none !important;
			cursor: default !important;
		}
    .bottom .link time {
      font-size: 0.8em;
    }
    .bottom .link a {
      color: var(--accent-2, #666);
      text-decoration: underline;
      text-decoration-color: var(--accent-1);
      text-transform: lowercase;
      cursor: pointer;
      outline: none;
    }
    .bottom .link a:hover {
      color: var(--accent-1, #ff3e00);
    }
</style>

<p class="bottom">
  {#if copyright}
	<span class="link">
    &copy; <time>{copyrightYear}</time>
    {#if copyrightUrl}
      <a href={copyrightUrl} rel="external noopener noreferrer" target="_blank">{copyright}</a>
    {:else}
      {copyright}
    {/if}
  </span>
  {/if}
	{#if sponsor && sponsorUrl}
    <span class="link">
      <a href={sponsorUrl} rel="external noopener noreferrer" target="_blank">{sponsor}</a>
    </span>
  {/if}
  <span class="link"><a href="https://github.com/{repository}">GitHub</a></span>
</p>
