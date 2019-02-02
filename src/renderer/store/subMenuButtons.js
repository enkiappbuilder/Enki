const SHOW_HOME = "SHOW_HOME"
const SHOW_GALLERY = "SHOW_GALLERY"
const SHOW_ABOUT = "SHOW_GALLERY"
const SHOW_CONTACT = "SHOW_CONTACT"
const SHOW_HELP = "SHOW_HELP"


export const showhome = () => {
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
