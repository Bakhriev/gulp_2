// Imports
import { parallel, series } from "gulp";

// Tasks
import {
	html,
	styles,
	scripts,
	del,
	watcher,
	serve,
	media,
	images,
	icons,
	sprite,
	vendors,
	fonts,
} from "./gulp/tasks/index.js";

const dev = series(
	del,
	html,
	parallel(
		styles,
		scripts,
		media,
		images,
		icons,
		sprite,
		vendors,
		fonts,
		watcher,
		serve
	)
);

export { dev };
