## Simple cli that helps to create react components faster

<hr>

## Usage:

### Enter: create-component %component_name%

### By default will create jsx and css module file in your project src/components directory.

### for example:

```
create-component Header
```

### In selected dir will appear two files, index.jsx and Header.module.css

### This files contains default react component structure

## Flags:

### "--css" or "-c" - Use css extension to create style module.

### "--scss" or "-s" - Use scss extension to create style module.

### "--js" or "-j" - Use JSX to create component file.

### "--ts" or "-t" - Use TSX to create component file.

### "--props" or "-p" - Include props interface into component file. (Can be used only with TSX)

### "--no-index" or "-n" - Disable index file in main components directory that contains more comfortable imports and exports for your components.
