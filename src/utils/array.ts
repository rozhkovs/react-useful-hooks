export const isEqual = (arr1: ReadonlyArray<any>, arr2: ReadonlyArray<any>) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  return arr1.every((value, index) => value === arr2[index]);
};
