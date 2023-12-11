# Obsidian Zettel ID Hider Plugin

This is a plugin for Obsidian (https://obsidian.md). It hides the Zettelkasten ID in the Obsidian markdown preview mode.

## Features

- Hides the Zettelkasten ID in Obsidian markdown preview mode.
- The ID is hidden using a markdown post-processor that replaces the ID with an empty string.

## How to use

1. Install the plugin.
2. Open a markdown file in Obsidian.
3. Switch to preview mode.
4. The Zettelkasten IDs in the links will be hidden.

For example, if you have a link like `[[202312102321 Some note]]` in your markdown file, it will be displayed as `[[Some note]]` in preview mode.

## Limitations

- The plugin only hides the ID in preview mode. The ID is still visible in edit mode.
- The plugin does not hide the ID in the editing mode.

## Development

This plugin is written in TypeScript. To build the plugin, run `npm install` to install the dependencies, then run `npm run build` to compile the TypeScript code to JavaScript.

## License

This plugin is released under the MIT License. See the LICENSE file for more details.