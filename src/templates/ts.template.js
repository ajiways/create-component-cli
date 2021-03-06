export const TSTemplate = (title, ext) => {
   return `import { FC } from "react"
import styles from "./${title}.module.${ext}"

const ${title}: FC = () => {
    return (
        <div className={styles.${title.toLowerCase()}}>
 
        </div>
    );
};
  
export default ${title};
`;
};
