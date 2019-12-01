export function getToken(key) {
  return localStorage.getItem(key);
}

export const divideArray = (array, width) => {
  const num = width > 950 ? 4 : width > 420 ? 3 : 2;

  let subArray = [];
  let newArray = [];

  // eslint-disable-next-line array-callback-return
  array.map((value, index) => {
    subArray = [...subArray, value];
    if (index % num === num - 1 || index === array.length - 1) {
      newArray = [...newArray, subArray];
      subArray = [];
    }
  });

  return newArray;
};
