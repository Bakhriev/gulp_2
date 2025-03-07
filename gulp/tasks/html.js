import { src, dest } from "gulp";
import { distPath, paths } from "../config/paths.js";
import browserSync from "browser-sync";

export const html = () => {
  return (
    src(paths.html)
      .pipe(dest(distPath))
      //
      .pipe(browserSync.stream())
  );
};
