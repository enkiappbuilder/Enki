const SHOW_MENU_BAR = "SHOW_MENU_BAR";
const HIDE_MENU_BAR = "HIDE_MENU_BAR";

export const showliveMENU = () => {
  return {
    type: SHOW_MENU_BAR,
    menuVisible: true
  };
};

export const hideliveMenu = () => {
  return {
    type: HIDE_MENU_BAR,
    menuVisible: false
  };
};

export default function(state = false, action) {
  switch (action.type) {
    case SHOW_MENU_BAR:
      return action.menuVisible;
    case HIDE_MENU_BAR:
      return action.menuVisible;
    default:
      return state;
  }
}
