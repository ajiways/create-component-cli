export const TSClassNamesPropsTemplate = (title, ext) => {
    return `import { FC } from "react"
import cl from "classnames"
import styles from "./${title}.module.${ext}"

export interface ${title}Props {

}

const ${title}: FC<${title}Props> = ({}: ${title}Props) => {
    return (
        <div className={cl(styles.${title.toLowerCase()})}>
        
        </div>
    );
};
   
export default ${title};
`;
}
