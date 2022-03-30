export const parseIndex = (fileStr, title) => {
   const strArr = fileStr.split("\n");
   const newArr = strArr.splice(0, strArr.length - 1);
   newArr.push(`import ${title} from "./${title}"`);
   newArr.push(strArr[strArr.length - 1]);
   const temp = newArr[newArr.length - 1].split("");
   newArr.pop();
   const idx = temp.indexOf("}");
   temp.splice(idx - 1, 0, `, ${title}`);
   newArr.push(temp.join(""));

   return newArr.join("\n");
};
