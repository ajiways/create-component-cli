import fs from "fs";
import { resolve } from "path";
import { styleTemplate } from "./templates/css.template";
import { IndexTemplate } from "./templates/index.template";
import { JSTemplate } from "./templates/js.template";
import { TSTemplate } from "./templates/ts.template";
import { TSPropsTemplate } from "./templates/ts.template.props";
import { parseIndex } from "./parse.index";

export const createComponent = (
   { title, addCssExt, addScssExt, setJsx, setTsx, useProps, noIndex, folder },
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
         console.log(`---> Message: Folder ${folder} was found. <---`);
         execPath = resolve(execPath, folder);
      }
   }

   if (!fs.existsSync(resolve(execPath, title))) {
      fs.mkdirSync(resolve(execPath, title), {
         recursive: true,
      });
   } else {
      console.log(`!!!-> Error: Component ${title} already exists! <-!!!`);
      return;
   }

   if (addCssExt) {
      fs.appendFile(
         resolve(execPath, title, title + ".module.css"),
         styleTemplate(title),
         () => console.log("---> Styles file was successfully created! <---")
      );
      styleType = "css";
   }

   if (addScssExt) {
      fs.appendFile(
         resolve(execPath, title, title + ".module.scss"),
         styleTemplate(title),
         () => console.log("---> Styles file was successfully created! <---")
      );
      styleType = "scss";
   }

   if (setJsx) {
      fs.appendFile(
         resolve(execPath, title, "index.jsx"),
         JSTemplate(title, styleType),
         () => console.log("---> Component file was successfully created! <---")
      );

      if (!noIndex) {
         if (!fs.existsSync(resolve(execPath, "index.js"))) {
            fs.appendFile(
               resolve(execPath, "index.js"),
               IndexTemplate(title),
               () =>
                  console.log("---> Index file was successfully created <---")
            );
         } else {
            const file = fs
               .readFileSync(resolve(execPath, "index.js"))
               .toString();

            fs.writeFileSync(
               resolve(execPath, "index.js"),
               parseIndex(file, title),
               () =>
                  console.log("---> Index file was successfully updated <---")
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
                     "---> Ts index file was successfully created <---"
                  )
            );
         } else {
            const file = fs
               .readFileSync(resolve(execPath, "index.ts"))
               .toString();

            fs.writeFileSync(
               resolve(execPath, "index.ts"),
               parseIndex(file, title),
               () =>
                  console.log(
                     "---> TS index file was successfully updated <---"
                  )
            );
         }
      }

      if (useProps) {
         fs.appendFile(
            resolve(execPath, title, "index.tsx"),
            TSPropsTemplate(title),
            () =>
               console.log(
                  "---> Component file with props was successfully created! <---"
               )
         );
         return;
      }
      fs.appendFile(
         resolve(execPath, title, "index.tsx"),
         TSTemplate(title, styleType),
         () => console.log("---> Component file was successfully created! <---")
      );
   }
};
