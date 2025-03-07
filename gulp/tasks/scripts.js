import { src, dest } from "gulp";
import { distPath, paths } from "../config/paths.js";
import browserSync from "browser-sync";

export const scripts = () => {
	return (
		src(paths.scripts)
			.pipe(dest(`${distPath}/js/`))
			//
			.pipe(browserSync.stream())
	);
};
