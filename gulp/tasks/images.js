import { src, dest } from "gulp";

import { distPath, paths } from "../config/paths.js";

export const images = () => {
	return (
		src(paths.images)
			//
			.pipe(dest(`${distPath}/images/`))
	);
};
