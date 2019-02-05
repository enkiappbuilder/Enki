import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePreview from './MobileHomepageView';
import GalleryPreview from './MobileGalleryView';
import AboutPreview from './MobileAboutMeView';
import ContactPreview from './MobileContactMeView';


const LiveReact  = () => {

  return(
    <Switch>
      <Route path='/mobileHome' component={HomePreview} />
      <Route path='/mobileGallery' component={GalleryPreview}/>
      <Route path='/mobileAbout' component={AboutPreview}/>
      <Route path='/mobileContact' component={ContactPreview}/>
    </Switch>
  )

}

export default LiveReact