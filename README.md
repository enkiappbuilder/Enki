# Getting Started

## install dependencies with [`yarn`](https://yarnpkg.com/en/)

```bash
yarn install
```

### Development Scripts

```bash
# run application in development mode
yarn dev

# compile source code and create webpack output
yarn compile

# `yarn compile` & create build with electron-builder
yarn dist

# `yarn compile` & create unpacked build with electron-builder
yarn dist:dir
```

# naming conventions

## Home Screen contains

  * ImagePath
  * AppName
  * LargeWelcomeText
  * DescriptionText1
  * HomeScreenButtonText

  ####styles
  * HomeScreenButtonBackgroundColor
  * HomeScreenHeaderColor
  * HomeScreenSubHeaderColor

## Gallery contains

  * image1Title
  * image1desc
  * image1Path

  * image2Title
  * image2desc
  * image2Path

  * image3Title
  * image3desc
  * image3Path

  * image4Title
  * image4desc
  * image4Path

  * image5Title
  * image5desc
  * image5Path

  * GalleryHeaderText

  #### styles

  * GalleryBackgroundColor
  * GalleryTitleColor
  * GalleryTitleWeight
  * GalleryDescriptionTextColor

## About contains

  * AboutMeHeaderText
  * AboutMeImg
  * AboutMeHeader
  * AboutMeDescText
  * AboutMeButtonText

  #### styles

  * AboutMeButtonBackgroundColor
  * AboutMeBackGroundColor
  * AboutMeTextBorderColor
  * AboutMeTextBackgroundColor
  * AboutMeHeaderTextColor
  * AboutMeDescTextColor
