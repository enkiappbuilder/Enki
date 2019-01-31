const SAVE_APP_DETAILS = "SAVE_APP_DETAILS";

const defaultState = {
  AppName: "",
  TitleText1: "",
  DescriptionText1: "",
  WelcomeText: ""
};

export const saveAppDetails = details => {
  return {
    type: SAVE_APP_DETAILS,
    details
  };
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case SAVE_APP_DETAILS:
      return { ...state, ...action.details };
    default:
      return state;
  }
}
