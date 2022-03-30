import fs from "fs";
import { resolve } from "path";
import { styleTemplate } from "./templates/css.template";
import { IndexTemplate } from "./templates/index.template";
import { JSTemplate } from "./templates/js.template";
import { TSTemplate } from "./templates/ts.template";
import { TSPropsTemplate } from "./templates/ts.template.props";

export const createComponent = (
   { title, addCssExt, addScssExt, setJsx, setTsx, useProps, noIndex },
   execPath
) => {
   if (!fs.existsSync(resolve(execPath + title))) {
      fs.mkdirSync(resolve(execPath + title), {
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
   }

   if (addScssExt) {
      fs.appendFile(
         resolve(execPath, title, title + ".module.scss"),
         styleTemplate(title),
         () => console.log("---> Styles file was successfully created! <---")
      );
   }

   if (setJsx) {
      fs.appendFile(
         resolve(execPath, title, "index.jsx"),
         JSTemplate(title),
         () => console.log("---> Component file was successfully created! <---")
      );

      if (!noIndex) {
         if (!fs.existsSync(resolve(execPath, "index.js"))) {
            fs.appendFile(
               resolve(execPath, "../", "index.js"),
               IndexTemplate(title),
               () =>
                  console.log("---> Index file was successfully created <---")
            );
         } else {
            fs.appendFile(
               resolve(execPath, "index.js"),
               IndexTemplate(title),
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
            fs.appendFile(
               resolve(execPath, "index.ts"),
               IndexTemplate(title),
               () =>
                  console.log(
                     "---> Ts index file was successfully updated <---"
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
         TSTemplate(title),
         () => console.log("---> Component file was successfully created! <---")
      );
   }
};
import BSide from "./BSide"
export { BSide }
