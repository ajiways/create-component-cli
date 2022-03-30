export const TSPropsTemplate = (title) => {
   return `import React, { FC } from 'react'

export interface ${title}Props {

}

const ${title}: FC = ({}: ${title}Props) => {
    return (
      <div>
  
      </div>
  );
};
   
export default ${title} ;
    
`;
};
