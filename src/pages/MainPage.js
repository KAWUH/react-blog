import React from 'react'
import MainContent from '../components/MainContent'
import SideBanner from '../components/SideBanner'
import ToTop from '../components/ToTop'
import Footer from '../components/Footer'

export default function MainSite( {setPost} ) {
  return (
    <div>
      <div className="mc-sb-container">
        <MainContent setPost = {setPost}/>
        <SideBanner/>
      </div>
      <ToTop/>
      <Footer/>
    </div>
  )
}
