const SAVE_APP_DETAILS = "SAVE_APP_DETAILS";

const defaultDesc = "This is just some filler lorem ipsum, no not really, but this is an about page that should be something about you! Now make up your mind and say something about yourself! Probably something good and not bad! Yeah! ";

const defaultState = {

  /*Home Screen*/
  HomeScreenBackgroundImage: "",
  HomeScreenHeaderText: "Joe",
  HomeScreenLargeWelcomeText: "Welcome",
  HomeScreenLargeWelcomeColor: "white",
  HomeScreenDescriptionText: "Photographer and Designer",
  HomeScreenDescriptionColor: "white",
  HomeScreenButtonText: "About Me",
  HomeScreenButtonBackgroundColor: 'rgba(250,249,249,0.3)',



  /*Gallery Screen*/
  GalleryHeaderText: "Header Text",

  GalleryTitleText1: "Cyberpunk Street",
  GalleryDescriptionText1: "My photo description. This was taken in 2014 on a Nikon D810 with long exposure.",
  GalleryImage1Path: "",

  GalleryTitleText2: "Forest",
  GalleryDescriptionText2: "This image is taken in RAW and converted to JPEG with Capture NX 2.",
  GalleryImage2Path: "",

  GalleryTitleText3: "Icy Winter",
  GalleryDescriptionText3: "Abstract icy winter, taken with Nikon D800.",
  GalleryImage3Path: "",

  GalleryTitleText4: "Lantern Street",
  GalleryDescriptionText4: "Unique lantern street in Japan.",
  GalleryImage4Path: "",

  GalleryTitleText5: "Rainy Street",
  GalleryDescriptionText5: "This photo was taken on a rainy Sunday. I'm glad I braved the weather to get the shot!",
  GalleryImage5Path: "",

  GalleryBackgroundColor: "#000000",
  GalleryPhotoTitleColor: "white",
  GalleryPhotoDescriptionColor: "white",


  /*About me Screen*/

  AboutMeBackGroundColor: "#0e0f0f",
  AboutMeHeaderText: "Header Text",
  AboutMeImage: "",
  AboutMeTitleText: "Title Text",
  AboutMeTitleColor: "white",
  AboutMeDescText: defaultDesc,
  AboutMeDescColor: "white",
  AboutMeDescBackgroundColor: "#0e0f0f",
  AboutMeBorderColor: "blue",
  AboutMeButtonText: "Contact",
  AboutMeButtonBackgroundColor: "#0e0f0f",

  /*Contact me Screen*/

  ContactScreenHeaderText: "Header Text",
  ContactScreenInstagramURLText: "",
  ContactScreenTwitterURLText: "",
  ContactScreenFacebookURLText: "",
  ContactScreenMainText: "Contact Me!",
  FormMessageText: "Whats Up?",

  ContactScreenSubmitButtonBackgroundColor: "",
  ContactScreenBackgroundColor: "#000000",

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
