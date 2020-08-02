export function getToken(key) {
  return localStorage.getItem(key);
}

export const formatRuntime = runtime => {
  const hour = parseInt(runtime / 60);
  const min = runtime % 60;

  return `${hour}h ${min}min`;
};

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

export const formatSlideItem = (id, hover, select) => {
  if (select > 0) return;

  if (hover > 0) {
    if (hover === 1) {
      return id === 1
        ? {
            zIndex: 4,
            transform: "translate3d(96.75px, 0px, 0px)",
            transitionDuration: "500ms",
            transitionDelay: "0ms"
          }
        : {
            transform: "translate3d(193.5px, 0px, 0px)",
            transitionDuration: "500ms",
            transitionDelay: "0ms"
          };
    } else if (hover < 6) {
      return id === hover
        ? {
            zIndex: 4,
            transform: "translate3d(0px, 0px, 0px)",
            transitionDuration: "500ms",
            transitionDelay: "0ms"
          }
        : id < hover && id > 0
        ? {
            transform: "translate3d(-96.75px, 0px, 0px)",
            transitionDuration: "500ms",
            transitionDelay: "0ms"
          }
        : id > hover && id <= 6
        ? {
            transform: "translate3d(96.75px, 0px, 0px)",
            transitionDuration: "500ms",
            transitionDelay: "0ms"
          }
        : {
            transform: "translate3d(0px, 0px, 0px)",
            transitionDuration: "500ms",
            transitionDelay: "0ms"
          };
    } else if (hover === 6) {
      return id === 6
        ? {
            zIndex: 4,
            transform: "translate3d(-96.75px, 0px, 0px)",
            transitionDuration: "500ms",
            transitionDelay: "0ms"
          }
        : id < 6 && id > 0
        ? {
            transform: "translate3d(-193.5px, 0px, 0px)",
            transitionDuration: "500ms",
            transitionDelay: "0ms"
          }
        : {
            transform: "translate3d(0px, 0px, 0px)",
            transitionDuration: "500ms",
            transitionDelay: "0ms"
          };
    }
  } else {
    return {
      transform: "translate3d(0px, 0px, 0px)",
      transitionDuration: "500ms",
      transitionDelay: "0ms"
    };
  }
};
