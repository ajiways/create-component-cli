export const IndexTemplate = (title) => {
   return `import ${title} from "./${title}"
export { ${title} };
`
};
