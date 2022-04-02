
# Simple cli that helps to create react components faster

## Usage:

### Enter: create-component %component_name% (or cc %component_name%)

### By default, will create jsx and css module file in your project src/components directory.

### for example:

```   
create-component Header   
```   

### In your path/to/project/src/components will appear index.jsx and Header.module.css, these files contains default react component structure.
<div style="display: flex; justify-content: space-between;">    
    <div>    
        <h4>Result files structure:</h4>    
        <img src="https://i.ibb.co/kqCQKVm/Code-r371a-Kp-S5y.png" alt="drawing" width="300"/>    
    </div>    
    <div>    
        <h4>Result main component file:</h4>    
        <img src="https://i.ibb.co/G0WNjfX/MAIN.png" alt="drawing" width="500"/>    
    </div>    
    <div>    
        <h4>Result styles module file:</h4>    
        <img src="https://i.ibb.co/P49TT6c/STYLES.png" alt="drawing" width="200"/>    
    </div>    
    <div>    
        <h4>Result index file:</h4>    
        <img src="https://i.ibb.co/Q90MS2T/INDEX.png" alt="drawing" width="400"/>    
    </div>    
</div>    

### Also, you can add config file to set default flags.
### In your root project directory create ".kclioptions.js" file, it should export object that contains config settings.

### Config settings example:  <br>![Setting Example](https://i.ibb.co/8cW7qM8/Code-ZUJQ6-FPFRu.png)

### All config settings (true or false):
```  
 addCssExt: Use css extension to create style module file.   
 addScssExt: Use scss extension to create style module file.   
 setJsx: Use js to create main component file.   
 setTsx: Use ts to create main component file.   
 useProps: Include props interface into main component file.   
 noIndex: Disable index file in main components directory.
 useClassNames: Include classnames import into your main component file.
```  

### If you don't want to use config file, just use flags instead.

### All flags:
```  
"--css" or "-c" - Use css extension to create style module. (By default)   
"--scss" or "-s" - Use scss extension to create style module.   
"--js" or "-j" - Use JSX to create component file. (By default)   
"--ts" or "-t" - Use TSX to create component file.   
"--props" or "-p" - Include props interface into component file. (Can be used only with TSX)   
"--no-index" or "-n" - Disable index file in main components' directory that contains more comfortable imports and exports for your components.   
"--folder=%NAME%" or "-f %NAME%" - Add nested folder to your components' directory.   
"--use-cn" or "-ucn" - Include classnames import into your main component file.
```  

### For example:

```   
create-component Button -f UI   
```   

#### Result: path/to/your/project/src/components/UI/Button/...
![Result image](https://i.ibb.co/9tHS0Sc/Code-g-IOQzr-Vgm-T.png)

### Links:

#### [GitHub Repository](https://github.com/ajiways/create-component-cli)

#### [Npm package](https://www.npmjs.com/package/@kswbtw/create-component-cli)