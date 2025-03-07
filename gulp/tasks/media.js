import { src, dest } from "gulp";

import { distPath, paths } from "../config/paths.js";

export const media = () => {
	return (
		src(paths.media)
			//
			.pipe(dest(`${distPath}/media/`))
	);
};
