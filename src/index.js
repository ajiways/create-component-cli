import fs from "fs";
import { resolve } from "path";
import { styleTemplate } from "./templates/css.template";
import { IndexTemplate } from "./templates/index.template";
import { JSTemplate } from "./templates/js.template";
import { TSTemplate } from "./templates/ts.template";
import { TSPropsTemplate } from "./templates/ts.template.props";
import { parseIndex } from "./parse.index";
import chalk from "chalk";
import { JSClassNamesTemplate } from "./templates/js.ClassNamesTemplate";
import { TSClassNamesPropsTemplate } from "./templates/ts.classNames.props.template";
import { TSClassNamesTemplate } from "./templates/ts.classNames.template";

export const createComponent = (
   {
      title,
      addCssExt,
      addScssExt,
      setJsx,
      setTsx,
      useProps,
      noIndex,
      folder,
      useClassNames,
   },
   execPath
) => {
   let styleType = "";

   if (folder) {
      if (!fs.existsSync(resolve(execPath, folder))) {
         fs.mkdirSync(resolve(execPath, folder), {
            recursive: true,
         });
         execPath = resolve(execPath, folder);
      } else {
         console.log(
            chalk.yellow(`---> Message: Folder ${folder} was found. <---`)
         );
         execPath = resolve(execPath, folder);
      }
   }

   if (!fs.existsSync(resolve(execPath, title))) {
      fs.mkdirSync(resolve(execPath, title), {
         recursive: true,
      });
   } else {
      console.log(
         chalk.red(`!!!-> Error: Component ${title} already exists! <-!!!`)
      );
      return;
   }

   if (addCssExt) {
      fs.appendFile(
         resolve(execPath, title, title + ".module.css"),
         styleTemplate(title),
         () =>
            console.log(
               chalk.green("---> Styles file was successfully created! <---")
            )
      );
      styleType = "css";
   }

   if (addScssExt) {
      fs.appendFile(
         resolve(execPath, title, title + ".module.scss"),
         styleTemplate(title),
         () =>
            console.log(
               chalk.green("---> Styles file was successfully created! <---")
            )
      );
      styleType = "scss";
   }

   if (setJsx) {
      if (useClassNames) {
         fs.appendFile(
            resolve(execPath, title, "index.jsx"),
            JSClassNamesTemplate(title, styleType),
            () =>
               console.log(
                  chalk.green(
                     "---> Component file was successfully created! <---"
                  )
               )
         );
      } else {
         fs.appendFile(
            resolve(execPath, title, "index.jsx"),
            JSTemplate(title, styleType),
            () =>
               console.log(
                  chalk.green(
                     "---> Component file was successfully created! <---"
                  )
               )
         );
      }

      if (!noIndex) {
         if (!fs.existsSync(resolve(execPath, "index.js"))) {
            fs.appendFile(
               resolve(execPath, "index.js"),
               IndexTemplate(title),
               () =>
                  console.log(
                     chalk.green(
                        "---> Index file was successfully created <---"
                     )
                  )
            );
         } else {
            const file = fs
               .readFileSync(resolve(execPath, "index.js"))
               .toString();

            fs.writeFileSync(
               resolve(execPath, "index.js"),
               parseIndex(file, title)
            );
            console.log(
               chalk.yellow("---> Index file was successfully updated <---")
            );
         }
      }
   }

   if (setTsx) {
      if (!noIndex) {
         if (!fs.existsSync(resolve(execPath, "index.ts"))) {
            fs.appendFile(
               resolve(execPath, "index.ts"),
               IndexTemplate(title),
               () =>
                  console.log(
                     chalk.green(
                        "---> Ts index file was successfully created <---"
                     )
                  )
            );
         } else {
            const file = fs
               .readFileSync(resolve(execPath, "index.ts"))
               .toString();

            fs.writeFileSync(
               resolve(execPath, "index.ts"),
               parseIndex(file, title)
            );
            console.log(
               chalk.yellow("---> TS index file was successfully updated <---")
            );
         }
      }

      if (useProps) {
         if (useClassNames) {
            fs.appendFile(
               resolve(execPath, title, "index.tsx"),
               TSClassNamesPropsTemplate(title, styleType),
               () =>
                  console.log(
                     chalk.green(
                        "---> Component file was successfully created! <---"
                     )
                  )
            );
         } else {
            fs.appendFile(
               resolve(execPath, title, "index.tsx"),
               TSPropsTemplate(title, styleType),
               () =>
                  console.log(
                     chalk.green(
                        "---> Component file was successfully created! <---"
                     )
                  )
            );
         }
      } else {
         if (useClassNames) {
            fs.appendFile(
               resolve(execPath, title, "index.tsx"),
               TSClassNamesTemplate(title, styleType),
               () =>
                  console.log(
                     chalk.green(
                        "---> Component file was successfully created! <---"
                     )
                  )
            );
         } else {
            fs.appendFile(
               resolve(execPath, title, "index.tsx"),
               TSTemplate(title, styleType),
               () =>
                  console.log(
                     chalk.green(
                        "---> Component file was successfully created! <---"
                     )
                  )
            );
         }
      }
   }
};
