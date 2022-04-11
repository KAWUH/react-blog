import React from 'react'
import Tags from './Tags'
import Title from './Title'
import Photo from './Photo'
import Content from './Content'
import CommentBox from './CommentBox'

export default function MainContentArticle() {
  return (
    <div className="main-content-article">
      <Tags location="inMainContentArticle"/>
      <Title location="inMainContentArticle"/>
      <Photo location="inMainContentArticle"/>
      <Content location="inMainContentArticle"/>
      <CommentBox location="inMainContentArticle"/>
    </div>
    
  )
}
