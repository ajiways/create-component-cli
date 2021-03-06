export const TSPropsTemplate = (title, ext) => {
   return `import { FC } from "react"
import styles from "./${title}.module.${ext}"

export interface ${title}Props {

}

const ${title}: FC<${title}Props> = ({}: ${title}Props) => {
    return (
        <div className={styles.${title.toLowerCase()}}>
     
        </div>
    );
};
   
export default ${title};
`;
};
