import React, { useState } from 'react'
import CommentBox from '../components/CommentBox'
import { getDocs, collection, deleteDoc, doc  } from 'firebase/firestore'
import { auth, db } from "../firebase-config";

export default function ArticlePage( {post} ) {

  /*
  const [postsList, setPostsList] = useState([]);
  const postsCollectionRef = collection( db, "posts" );
  */


  console.log(post);

  return (
    <div>
      
      <h1>Tittttttttttttttttttttle</h1>
      <h1> GGGGGGGGGGGGGGGGGGGGGG </h1>
      <p className='post-title'>{post.title}</p>
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
