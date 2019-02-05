const SHOW_MENU_BAR = "SHOW_MENU_BAR";
const HIDE_MENU_BAR = "HIDE_MENU_BAR";

export const showMENU = () => {
  return {
    type: SHOW_MENU_BAR,
    menuVisible: true
  };
};

export const hideMenu = () => {
  return {
    type: HIDE_MENU_BAR,
    menuVisible: false
  };
};

export default function(state = true, action) {
  switch (action.type) {
    case SHOW_MENU_BAR:
      return action.menuVisible;
    case HIDE_MENU_BAR:
      return action.menuVisible;
    default:
      return state;
  }
}
