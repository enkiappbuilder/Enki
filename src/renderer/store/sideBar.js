const initialState = {
  menuVisible: false,
  editEnabled: false
}

const SHOW_SIDE_BAR = "SHOW_SIDE_BAR";
const HIDE_SIDE_BAR = "HIDE_SIDE_BAR";
const TOGGLE_EDIT = "TOGGLE_EDIT"

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

export const toggleEdit = (projectCreated) => {
  return {
    type: TOGGLE_EDIT,
    projectCreated
  }
}


export default function (state = initialState, action) {
  switch (action.type) {
    case SHOW_SIDE_BAR:
      return { ...state, menuVisible: action.menuVisible }
    case HIDE_SIDE_BAR:
      return { ...state, menuVisible: action.menuVisible }
    case TOGGLE_EDIT:
      return { ...state, editEnabled: action.projectCreated }
    default:
      return state;
  }
}
