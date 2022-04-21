import React, {useEffect, useState} from 'react'
import { getDocs, collection, deleteDoc, doc  } from 'firebase/firestore'
import { auth, db } from "../firebase-config";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import ArticlePage from '../pages/ArticlePage';

export default function MainContent( {setPost} ) {

  const [postsList, setPostsList] = useState([]);
  const postsCollectionRef = collection( db, "posts" );

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostsList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, [deletePost]);


  return (
    <div className="main-content">
      {postsList.map((post) => {
        return(
           <div className='post'> 
              <p className='post-title'>{post.title}</p>
              {/* image */}
              <p className='post-tags'>{post.tags}</p>
              <button onClick={() => setPost(post)}> <Link to="/article"> Read More </Link> </button>
           </div>
        )
      })}
    </div>
  )
}
