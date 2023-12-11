/**
 * This plugin hides the zettel ID in Obsidian markdown preview.
 */
import { Plugin, MarkdownPostProcessorContext } from 'obsidian';

export default class ZettelIdHiderPlugin extends Plugin {
	/**
	 * Called when the plugin is loaded.
	 * Registers a markdown post-processor to hide zettel IDs in the preview.
	 */
	async onload() {
		this.registerMarkdownPostProcessor((el: HTMLElement, ctx: MarkdownPostProcessorContext) => {
			el.innerHTML = el.innerHTML.replace(/(<a[^>]*>)(\d{12}\s)([^<]*<\/a>)/g, '$1$3');
			return el;
		});
	}
}
