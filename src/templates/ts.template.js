export const TSTemplate = (title) => {
   return `import React, { FC } from 'react'

const ${title}: FC = () => {
   return (
     <div>
 
     </div>
 );
};
  
export default ${title} ;
   
`;
};
