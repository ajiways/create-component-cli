export const JSTemplate = (title, ext) => {
   return `import styles from "./${title}.module.${ext}"

const ${title} = () => {
    return (
        <div className={styles.${title.toLowerCase()}}>
  
        </div>
    );
};
   
export default ${title} ;
`;
};
