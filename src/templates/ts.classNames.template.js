export const TSClassNamesTemplate = (title, ext) => {
    return `import { FC } from "react"
import cl from "classnames"
import styles from "./${title}.module.${ext}"

const ${title}: FC = () => {
    return (
        <div className={cl(styles.${title.toLowerCase()})}>
 
        </div>
    );
};
export default ${title};
`
}
