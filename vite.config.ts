import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
	//Keep sprites as files instead of inlining ~950 small ones into the JS bundle.
	build: { assetsInlineLimit: 0 }
});
