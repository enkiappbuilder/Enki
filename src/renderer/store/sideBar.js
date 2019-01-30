const SHOW_SIDE_BAR = "SHOW_SIDE_BAR";
const HIDE_SIDE_BAR = "HIDE_SIDE_BAR";

export const showSideBar = () => {
  return {
    type: SHOW_SIDE_BAR,
    menuVisible: true
  };
};

export const hideSideBar = () => {
  return {
    type: HIDE_SIDE_BAR,
    menuVisible: false
  };
};

export default function(state = false, action) {
  switch (action.type) {
    case SHOW_SIDE_BAR:
      return action.menuVisible;
    case HIDE_SIDE_BAR:
      return action.menuVisible;
    default:
      return state;
  }
}
