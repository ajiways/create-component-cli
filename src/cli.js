import arg, {ArgError} from "arg";
import chalk from "chalk";
import path from "path";
import {createComponent} from ".";

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
            "--use-cn": Boolean,
            "-j": "--js",
            "-t": "--ts",
            "-c": "--css",
            "-s": "--scss",
            "-p": "--props",
            "-n": "--no-index",
            "-f": "--folder",
            "-ucn": "--use-cn"
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
        useClassNames: args["--use-cn"] || false,
    };
};

const parseTitleArg = (rawArgs) => {
    const args = arg({
        "--folder": String,
        "-f": "--folder"
    }, {
        argv: rawArgs.slice(2),
    })

    return {
        title: args._[0],
        folder: args["--folder"] || null,
    }
}

export const cli = async (args) => {
    let options = {};

    try {
        try{
            const rootProjPath = process.cwd()
            const data = await import(path.resolve(rootProjPath, ".kclioptions"));
            options = data.cliOptions;
            const temp = parseTitleArg(args)
            options.folder = temp.folder
            options.title = temp.title
            console.log(chalk.green("---> Config file was found <---"))
        } catch (e) {
            if(e instanceof ArgError) {
                console.log(chalk.red("!!!-> You can't pass flags (except -f flag) while using config file. <-!!!"))
                return;
            }
            console.log(chalk.yellow("---> No config file was found <---"))
            options = parseArgsIntoOptions(args);
        }

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
                chalk.red(`!!!-> Error: You can't use interfaces with JSX files. <-!!!`)
            );
            return;
        }

        if (typeof options.title !== "string") {
            console.log(chalk.red(`!!!-> Error: Wrong component name! <-!!!`));
            return;
        }

        createComponent(options, execPath);
    } catch (error) {
        console.log(chalk.red("!!!-> Error: Wrong args passed! <-!!!"));
    }
};
