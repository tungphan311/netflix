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

export const formatSlideItem = (id, hover, item, select, width) => {
  if (select > 0) return;
  if (!hover) return;

  if (item === 9) {
    if (hover > 0) {
      if (hover === 1) {
        const trans = 2.1 * width;
        return id === hover
          ? {
              zIndex: 4,
              transform: "translate3d(0px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : {
              transform: `translate3d(${trans}px, 0px, 0px)`,
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            };
      } else if (hover === 9) {
        const trans = -2.1 * width;
        return {
          zIndex: 4,
          transform: `translate3d(${trans}px, 0px, 0px)`,
          transitionDuration: "500ms",
          transitionDelay: "0ms"
        };
      } else {
        const trans = 1.1 * width;
        return id === hover
          ? {
              zIndex: 4,
              transform: `translate3d(-${width}px, 0px, 0px)`,
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : id < hover
          ? {
              transform: `translate3d(-${width}px, 0px, 0px)`,
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : {
              transform: `translate3d(${trans}px, 0px, 0px)`,
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            };
      }
    }
  }
};
