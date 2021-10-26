<script lang="ts">
  export let url = '/';
  export let text = 'save.js';
</script>

<style lang="css" windi windi:preflights windi:safelist>
  h1 {
		font: normal 100 15vw/1 'Exo 2', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		color: var(--accent-1);
		text-transform: lowercase;
		cursor: default;
		display: block;
		width: 100%;
		text-align: center;
		position: absolute;
		top: 0.5em;
		left: 0;
		letter-spacing: -0.033em;
	}
		h1 a {
			text-decoration: none !important;
			color: #ff3e00aa !important;
			transition: all .3s ease-in;
      -webkit-animation: 0.5s bubble infinite running alternate ease-in-out;
      animation: 0.5s bubble infinite running alternate ease-in-out;
      animation-play-state: running;
		}
		h1 a:hover {
			color: #ff3e00ff !important;
		}
	
  @keyframes bubble {
		from {
			-webkit-transform: scale3d(1, 1, 1);
			transform: scale3d(1, 1, 1);
		}
		50% {
			-webkit-transform: scale3d(1.05, 1.05, 1.05);
			transform: scale3d(1.05, 1.05, 1.05);
		}
		to {
			-webkit-transform: scale3d(1, 1, 1);
			transform: scale3d(1, 1, 1);
		}
	}
	@-webkit-keyframes bubble {
		from {
			-webkit-transform: scale3d(1, 1, 1);
			transform: scale3d(1, 1, 1);
		}
		50% {
			-webkit-transform: scale3d(1.05, 1.05, 1.05);
			transform: scale3d(1.05, 1.05, 1.05);
		}
		to {
			-webkit-transform: scale3d(1, 1, 1);
			transform: scale3d(1, 1, 1);
		}
	}
</style>

<h1>
  <a href={url} {...$$restProps}>{text}</a>
</h1>
