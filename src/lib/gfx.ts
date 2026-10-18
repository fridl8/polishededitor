//Bundles the extracted sprites with the site, so they always match the
//regenerated data. Keys look like '/src/gfx/items/DEXNAV.png'.
const urls: Record<string, string> = import.meta.glob(
	['/src/gfx/pokemon/**/*.gif', '/src/gfx/items/*.png', '/src/gfx/trainers/*.png'],
	{ eager: true, query: '?url', import: 'default' }
);

//Takes a path relative to src/, e.g. 'gfx/items/DEXNAV.png'.
export function gfx(path: string): string {
	return urls[`/src/${path}`] ?? '';
}
