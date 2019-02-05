//action types
const SHOW_HOME = "SHOW_HOME"
const SHOW_GALLERY = "SHOW_GALLERY"
const SHOW_ABOUT = "SHOW_GALLERY"
const SHOW_CONTACT = "SHOW_CONTACT"
const SHOW_HELP = "SHOW_HELP"
const SHOW_FINAL = "SHOW_FINAL"

//action creators
export const showHome = () => {
  return {
    type: SHOW_HOME,
    currentPage: "home"
  };
};

export const showGallery = () => {
  return {
    type: SHOW_GALLERY,
    currentPage: "gallery"
  };
};

export const showAbout = () => {
  return {
    type: SHOW_ABOUT,
    currentPage: "about"
  }
}

export const showContact = () => {
  return {
    type: SHOW_CONTACT,
    currentPage: "contact"
  }
}

export const showHelp = () => {
  return {
    type: SHOW_HELP,
    currentPage: "help"
  }
}
export const showFinal = () => {
  return {
    type: SHOW_FINAL,
    currentPage: "final"
  }
}

export default function(state = "help", action) {
  switch (action.type) {
    case SHOW_HOME:
      return action.currentPage;
    case SHOW_ABOUT:
      return action.currentPage;
    case SHOW_CONTACT:
      return action.currentPage;
    case SHOW_GALLERY:
      return action.currentPage;
    case SHOW_HELP:
      return action.currentPage;
    case SHOW_FINAL:
      return action.currentPage
    default:
      return state;
  }
}
