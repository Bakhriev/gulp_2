import { src, dest } from "gulp";
import { distPath, paths } from "../config/paths.js";
import browserSync from "browser-sync";

// gulp-file-include
export const html = async () => {
	const fileInclude = (await import("gulp-file-include")).default;

	return (
		src(paths.html)
			.pipe(
				fileInclude({
					prefix: "@",
					basepath: "@file",
				})
			)
			//
			.pipe(dest(distPath))
			//
			.pipe(browserSync.stream())
	);
};
