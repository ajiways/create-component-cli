export const JSClassNamesTemplate = (title, ext) => {
    return `import cl from "classnames"
import styles from "./${title}.module.${ext}"

const ${title} = () => {
    return (
        <div className={cl(styles.${title.toLowerCase()})}>
  
        </div>
    );
};
   
export default ${title};
`
}