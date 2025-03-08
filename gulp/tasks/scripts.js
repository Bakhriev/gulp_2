import { src, dest } from "gulp";
import { distPath, paths } from "../config/paths.js";
import browserSync from "browser-sync";

export const scripts = async () => {
	const plumber = (await import("gulp-plumber")).default;

	return (
		src(paths.scripts)
			.pipe(plumber())
			//
			.pipe(dest(`${distPath}/js/`))
			//
			.pipe(browserSync.stream())
	);
};
