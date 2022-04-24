import React, { useState } from 'react'
import CommentBox from '../components/CommentBox'
import { getDocs, collection, deleteDoc, doc  } from 'firebase/firestore'
import { auth, db } from "../firebase-config";
import ReactMarkdown from 'https://esm.sh/react-markdown@7'

export default function ArticlePage( {post} ) {

  /*
  const [postsList, setPostsList] = useState([]);
  const postsCollectionRef = collection( db, "posts" );
  */


  console.log(post);

  return (
    <div className='main-contant-article'>

      <p className='post-tags'>{post.tags}</p>
      <h1 className='post-title'>{post.title}</h1>
      <p className='post-author'>{auth.currentUser.displayName}</p>
      <ReactMarkdown className='post-content'>{post.postText}</ReactMarkdown>
      {/*
      <div className='post'> 
          <h1 style="color:blue;"> GGGGGGGGGGGGGGGGGGGGGG </h1>
          <p className='post-title'>{post.title}</p>
             image 
          <p className='post-tags'>{post.tags}</p>
      </div>
      <CommentBox currentUserName = {auth.currentUser.displayName} />
      */}
    </div>
    
  )
}
