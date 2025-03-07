import { src, dest } from "gulp";
import { distPath, paths } from "../config/paths.js";

export const fonts = () => {
	return (
		src(paths.fonts)
			//
			.pipe(dest(`${distPath}/fonts/`))
	);
};
