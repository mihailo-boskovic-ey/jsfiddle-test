import { typeCheck } from "type-check";

const checkType = (type) => {
  if (typeCheck("Array", type)) return `[${type}]`;
  if (typeCheck("Number | String", type)) return `${type}`;
};

export const formatInputValue = (input = []) => {
  const hasMultiArgs = input.map((el) => el).length > 1;
  if (hasMultiArgs) {
    let argumentList = ``;
    input.forEach((el) => {
      argumentList += ` ${checkType(el)},`;
    });
    argumentList = argumentList.substring(0, argumentList.length - 1);
    return argumentList;
  } else {
    const firstArg = input[0];
    return checkType(firstArg);
  }
};
