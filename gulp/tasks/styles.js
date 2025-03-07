import * as dartSass from "sass";
import gulpSass from "gulp-sass";
import autoprefixer from "gulp-autoprefixer";

import { src, dest } from "gulp";
import { distPath, paths } from "../config/paths.js";
import browserSync from "browser-sync";

const sass = gulpSass(dartSass);

export const styles = async () => {
	const gcmq = (await import("gulp-group-css-media-queries")).default;

	return (
		src(paths.styles)
			.pipe(sass().on("error", sass.logError))
			//
			.pipe(autoprefixer({ cascade: false }))
			//
			.pipe(gcmq())
			//
			.pipe(dest(`${distPath}/css/`))
			//
			.pipe(browserSync.stream())
	);
};
