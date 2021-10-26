import App from './App.svelte';

export default new App({
	target: document.body,
	props: {
		name: 'save.js',
		repository: 'nberlette/savejs.com',
		baseUrl: 'https://savejs.com',
	}
});

