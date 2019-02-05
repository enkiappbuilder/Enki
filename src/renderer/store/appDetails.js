const SAVE_APP_DETAILS = "SAVE_APP_DETAILS";

const defaultState = {

  /*Home Screen*/
  HomeScreenBackgroundImage: "",
  HomeScreenHeaderText: "Joe",
  HomeScreenLargeWelcomeText: "Welcome",
  HomeScreenLargeWelcomeColor: "",
  HomeScreenDescriptionText: "Photographer and Designer",
  HomeScreenDescriptionColor: "",
  HomeScreenButtonText: "About Me",
  HomeScreenButtonBackgroundColor: "",


  /*Gallery Screen*/
  GalleryHeaderText: "",

  GalleryTitleText1: "",
  GalleryDescriptionText1: "",
  GalleryImage1Path: "",

  GalleryTitleText2: "",
  GalleryDescriptionText2: "",
  GalleryImage2Path: "",

  GalleryTitleText3: "",
  GalleryDescriptionText3: "",
  GalleryImage3Path: "",

  GalleryTitleText4: "",
  GalleryDescriptionText4: "",
  GalleryImage4Path: "",

  GalleryTitleText5: "",
  GalleryDescriptionText5: "",
  GalleryImage5Path: "",

  GalleryBackgroundColor: "",
  GalleryPhotoTitleColor: "",
  GalleryPhotoDescriptionColor: "",


  /*About me Screen*/

  AboutMeBackGroundColor: "",
  AboutMeHeaderText: "",
  AboutMeImage: "",
  AboutMeTitleText: "",
  AboutMeTitleColor: "",
  AboutMeDescText: "",
  AboutMeDescColor: "",
  AboutMeDescBackgroundColor: "",
  AboutMeBorderColor: "",
  AboutMeButtonText: "",
  AboutMeButtonBackgroundColor: "",

  /*Contact me Screen*/

  ContactScreenHeaderText: "",
  ContactScreenInstagramURLText: "",
  ContactScreenTwitterURLText: "",
  ContactScreenFacebookURLText: "",
  ContactScreenMainText: "",
  FormMessageText: "",

  ContactScreenSubmitButtonBackgroundColor: "",
  ContactScreenBackgroundColor: "",

};

export const saveAppDetails = details => {
  return {
    type: SAVE_APP_DETAILS,
    details
  };
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case SAVE_APP_DETAILS:
      return { ...state, ...action.details };
    default:
      return state;
  }
}
