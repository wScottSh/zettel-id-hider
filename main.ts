import { Plugin, MarkdownPostProcessor, MarkdownPostProcessorContext } from 'obsidian';

export default class MyPlugin extends Plugin {
	async onload() {
		this.registerMarkdownPostProcessor((el: HTMLElement, ctx: MarkdownPostProcessorContext) => {
			const html = el.innerHTML;
			// console.log('html:', html);
			const regex = /(<a[^>]*>)(\d{12}\s)([^<]*<\/a>)/g;
			el.innerHTML = html.replace(regex, (match, p1, p2, p3) => {
				return p1 + p3;
			});
			return el;
		});
	}
}
