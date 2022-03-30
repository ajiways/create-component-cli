import arg from "arg";
import { resolve } from "path";
import { createComponent } from ".";

const parseArgsIntoOptions = (rawArgs) => {
   const args = arg(
      {
         "--css": Boolean,
         "--scss": Boolean,
         "--js": Boolean,
         "--ts": Boolean,
         "--props": Boolean,
         "--no-index": Boolean,
         "--folder": String,
         "-j": "--js",
         "-t": "--ts",
         "-c": "--css",
         "-s": "--scss",
         "-p": "--props",
         "-n": "--no-index",
         "-f": "--folder",
      },
      {
         argv: rawArgs.slice(2),
      }
   );

   return {
      title: args._[0],
      addCssExt: args["--css"] || true,
      addScssExt: args["--scss"] || false,
      setJsx: args["--js"] || true,
      setTsx: args["--ts"] || false,
      useProps: args["--props"] || false,
      noIndex: args["--no-index"] || false,
      folder: args["--folder"] || null,
   };
};
// export const cli = (args) => {
//    const options = parseArgsIntoOptions(args);
//    const execPath = process.cwd() + "/src/components/";
//    console.log(resolve(execPath + options.folder));
// };

export const cli = (args) => {
   try {
      const options = parseArgsIntoOptions(args);
      const execPath = process.cwd() + "/src/components/";

      if (options.addScssExt) {
         options.addCssExt = false;
      }

      if (options.addCssExt) {
         options.addScssExt = false;
      }

      if (options.setTsx) {
         options.setJsx = false;
      }

      if (options.setJsx) {
         options.setTsx = false;
      }

      if (options.useProps && options.setJsx) {
         console.log(
            `!!!-> Error: You can't use interfaces with JSX files. <-!!!`
         );
         return;
      }

      if (typeof options.title !== "string") {
         console.error(`!!!-> Error: Wrong component name! <-!!!`);
         return;
      }

      createComponent(options, execPath);
   } catch (error) {
      console.log(error);
      console.log("!!!-> Error: Wrong args passed! <-!!!");
   }
};
