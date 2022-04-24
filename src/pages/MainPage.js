import React from 'react'
import MainContent from '../components/MainContent'
import SideBanner from '../components/SideBanner'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'

export default function MainPage( {setPost} ) {
  return (
    <div className='main-site'>
      <div className="mc-sb-container">
        <MainContent setPost = {setPost}/>
        <SideBanner/>
        <ScrollToTop/>
      </div>
      <Footer/>
    </div>
  )
}
