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

export const formatSlideItem = (id, hover, item, page) => {
  if (item === 9)
    if (hover > 0) {
      if (hover % 9 === 1) {
        return id === page * 9 + 1
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
      } else if (hover % 9 === 2) {
        return id === page * 9 + 2
          ? {
              zIndex: 4,
              transform: "translate3d(120px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : id < page * 9 + 2 && id > page * 9
          ? {
              transform: "translate3d(-80px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : id > page * 9 + 2 && id <= (page + 1) * 9 + 1
          ? {
              transform: "translate3d(318px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : {};
      } else if (hover % 9 === 3) {
        return id === page * 9 + 3
          ? {
              zIndex: 4,
              transform: "translate3d(80px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : id < page * 9 + 3 && id > page * 9
          ? {
              transform: "translate3d(-116px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : id > page * 9 + 3 && id <= (page + 1) * 9 + 1
          ? {
              transform: "translate3d(276px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : {};
      } else if (hover % 9 === 4) {
        return id === page * 9 + 4
          ? {
              zIndex: 4,
              transform: "translate3d(40px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : id < page * 9 + 4 && id > page * 9
          ? {
              transform: "translate3d(-162px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : id > page * 9 + 4 && id <= (page + 1) * 9 + 1
          ? {
              transform: "translate3d(239px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : {};
      } else if (hover % 9 === 5) {
        return id === page * 9 + 5
          ? {
              zIndex: 4,
              transform: "translate3d(0px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : id < page * 9 + 5 && id > page * 9
          ? {
              transform: "translate3d(-204px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : id > page * 9 + 5 && id <= (page + 1) * 9 + 1
          ? {
              transform: "translate3d(198px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : {};
      } else if (hover % 9 === 6) {
        return id === page * 9 + 6
          ? {
              zIndex: 4,
              transform: "translate3d(-41px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : id < page * 9 + 6 && id > page * 9
          ? {
              transform: "translate3d(-245px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : id > page * 9 + 6 && id <= (page + 1) * 9 + 1
          ? {
              transform: "translate3d(158px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : {};
      } else if (hover % 9 === 7) {
        return id === page * 9 + 7
          ? {
              zIndex: 4,
              transform: "translate3d(-82px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : id < page * 9 + 7 && id > page * 9
          ? {
              transform: "translate3d(-286px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : id > page * 9 + 7 && id <= (page + 1) * 9 + 1
          ? {
              transform: "translate3d(116px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : {};
      } else if (hover % 9 === 8) {
        return id === page * 9 + 8
          ? {
              zIndex: 4,
              transform: "translate3d(-123px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : id < page * 9 + 8 && id > page * 9
          ? {
              transform: "translate3d(-327px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : id > page * 9 + 8 && id <= (page + 1) * 9 + 1
          ? {
              transform: "translate3d(76px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : {};
      } else if (hover % 9 === 0) {
        return id === page * 9 + 9
          ? {
              zIndex: 4,
              transform: "translate3d(-198px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : id < page * 9 + 9 && id > page * 9
          ? {
              transform: "translate3d(-402px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : id === (page + 1) * 9 + 1
          ? {
              transform: "translate3d(0px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : {};
      }
    } else {
      return {};
    }

  if (item === 8)
    if (hover > 0) {
      if (hover % 8 === 1) {
        return id === page * 8 + 1
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
      } else if (hover % 8 === 2) {
        return id === page * 8 + 2
          ? {
              zIndex: 4,
              transform: "translate3d(120px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : id < page * 8 + 2 && id > page * 8
          ? {
              transform: "translate3d(-48px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : id > page * 8 + 2 && id <= (page + 1) * 8 + 1
          ? {
              transform: "translate3d(288px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : {};
      } else if (hover % 8 === 3) {
        return id === page * 8 + 3
          ? {
              zIndex: 4,
              transform: "translate3d(80px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : id < page * 8 + 3 && id > page * 8
          ? {
              transform: "translate3d(-90px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : id > page * 8 + 3 && id <= (page + 1) * 8 + 1
          ? {
              transform: "translate3d(248px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : {};
      } else if (hover % 8 === 4) {
        return id === page * 8 + 4
          ? {
              zIndex: 4,
              transform: "translate3d(40px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : id < page * 8 + 4 && id > page * 8
          ? {
              transform: "translate3d(-128px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : id > page * 8 + 4 && id <= (page + 1) * 8 + 1
          ? {
              transform: "translate3d(208px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : {};
      } else if (hover % 8 === 5) {
        return id === page * 8 + 5
          ? {
              zIndex: 4,
              transform: "translate3d(0px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : id < page * 8 + 5 && id > page * 8
          ? {
              transform: "translate3d(-168px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : id > page * 8 + 5 && id <= (page + 1) * 8 + 1
          ? {
              transform: "translate3d(168px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : {};
      } else if (hover % 8 === 6) {
        return id === page * 8 + 6
          ? {
              zIndex: 4,
              transform: "translate3d(-41px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : id < page * 8 + 6 && id > page * 8
          ? {
              transform: "translate3d(-210px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : id > page * 8 + 6 && id <= (page + 1) * 8 + 1
          ? {
              transform: "translate3d(126px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : {};
      } else if (hover % 8 === 7) {
        return id === page * 8 + 7
          ? {
              zIndex: 4,
              transform: "translate3d(-100px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : id < page * 8 + 7 && id > page * 8
          ? {
              transform: "translate3d(-268px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : id > page * 8 + 7 && id <= (page + 1) * 8 + 1
          ? {
              transform: "translate3d(68px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : {};
      } else if (hover % 8 === 0) {
        return id === page * 8 + 8
          ? {
              zIndex: 4,
              transform: "translate3d(-168px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : id < page * 8 + 8 && id > page * 8
          ? {
              transform: "translate3d(-336px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : id === (page + 1) * 8 + 1
          ? {
              transform: "translate3d(0px, 0px, 0px)",
              transitionDuration: "500ms",
              transitionDelay: "0ms"
            }
          : {};
      }
    } else {
      return {};
    }
};
