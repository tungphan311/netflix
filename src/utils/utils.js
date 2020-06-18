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

export const formatSlideItem = (id, hover, item, select) => {
  if (select > 0) return;

  if (item === 9)
    if (hover > 0) {
      if (hover === 1) {
        return id === 1
          ? {
              zIndex: 4,
              transform: "translate3d(201px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : {
              transform: "translate3d(402px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            };
      } else if (hover === 2) {
        return id === 2
          ? {
              zIndex: 4,
              transform: "translate3d(120px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : id < 2 && id > 0
          ? {
              transform: "translate3d(-80px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : id > 2
          ? {
              transform: "translate3d(318px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : {
              transform: "translate3d(0px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            };
      } else if (hover === 3) {
        return id === 3
          ? {
              zIndex: 4,
              transform: "translate3d(80px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : id < 3 && id > 0
          ? {
              transform: "translate3d(-116px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : id > 3
          ? {
              transform: "translate3d(276px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : {
              transform: "translate3d(0px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            };
      } else if (hover === 4) {
        return id === 4
          ? {
              zIndex: 4,
              transform: "translate3d(40px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : id < 4 && id > 0
          ? {
              transform: "translate3d(-162px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : id > 4
          ? {
              transform: "translate3d(239px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : {
              transform: "translate3d(0px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            };
      } else if (hover === 5) {
        return id === 5
          ? {
              zIndex: 4,
              transform: "translate3d(0px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : id < 5 && id > 0
          ? {
              transform: "translate3d(-204px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : id > 5
          ? {
              transform: "translate3d(198px, 0px, 0px)",
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
              transform: "translate3d(-41px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : id < 6 && id > 0
          ? {
              transform: "translate3d(-245px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : id > 6
          ? {
              transform: "translate3d(158px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : {
              transform: "translate3d(0px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            };
      } else if (hover === 7) {
        return id === 7
          ? {
              zIndex: 4,
              transform: "translate3d(-82px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : id < 7 && id > 0
          ? {
              transform: "translate3d(-286px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : id > 7
          ? {
              transform: "translate3d(116px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : {
              transform: "translate3d(0px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            };
      } else if (hover === 8) {
        return id === 8
          ? {
              zIndex: 4,
              transform: "translate3d(-123px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : id < 8 && id > 0
          ? {
              transform: "translate3d(-327px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : id > 8
          ? {
              transform: "translate3d(76px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : {
              transform: "translate3d(0px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            };
      } else if (hover === 9) {
        return id === 9
          ? {
              zIndex: 4,
              transform: "translate3d(-198px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : id < 9 && id > 0
          ? {
              transform: "translate3d(-402px, 0px, 0px)",
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

  if (item === 8)
    if (hover > 0) {
      if (hover === 1) {
        return id === 1
          ? {
              zIndex: 4,
              transform: "translate3d(162px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : {
              transform: "translate3d(328px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            };
      } else if (hover === 2) {
        return id === 2
          ? {
              zIndex: 4,
              transform: "translate3d(120px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : id < 2 && id > 0
          ? {
              transform: "translate3d(-48px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : id > 2 && id <= 8
          ? {
              transform: "translate3d(288px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : {
              transform: "translate3d(0px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            };
      } else if (hover === 3) {
        return id === 3
          ? {
              zIndex: 4,
              transform: "translate3d(80px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : id < 3
          ? {
              transform: "translate3d(-90px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : id > 3 && id <= 8
          ? {
              transform: "translate3d(248px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : {
              transform: "translate3d(0px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            };
      } else if (hover === 4) {
        return id === 4
          ? {
              zIndex: 4,
              transform: "translate3d(40px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : id < 4
          ? {
              transform: "translate3d(-128px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : id > 4 && id <= 8
          ? {
              transform: "translate3d(208px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : {
              transform: "translate3d(0px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            };
      } else if (hover === 5) {
        return id === 5
          ? {
              zIndex: 4,
              transform: "translate3d(0px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : id < 5
          ? {
              transform: "translate3d(-168px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : id > 5 && id <= 8
          ? {
              transform: "translate3d(168px, 0px, 0px)",
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
              transform: "translate3d(-41px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : id < 6
          ? {
              transform: "translate3d(-210px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : id > 6 && id <= 8
          ? {
              transform: "translate3d(126px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : {
              transform: "translate3d(0px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            };
      } else if (hover === 7) {
        return id === 7
          ? {
              zIndex: 4,
              transform: "translate3d(-100px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : id < 7
          ? {
              transform: "translate3d(-268px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : id > 7 && id <= 8
          ? {
              transform: "translate3d(68px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : {
              transform: "translate3d(0px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            };
      } else if (hover === 8) {
        return id === 8
          ? {
              zIndex: 4,
              transform: "translate3d(-168px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : id < 8 && id > 0
          ? {
              transform: "translate3d(-336px, 0px, 0px)",
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
