import React, {useEffect, useState} from 'react'
import { getDocs, collection, deleteDoc, doc, query, where  } from 'firebase/firestore'
import { auth, db } from "../firebase-config";

export default function CommentBox( {currentUserName} ) {

  const [commentsList, setCommentsList] = useState([]);
  const commentsCollectionRef = collection( db, "comments" );
  const [firebaseComments, setFirebaseComments] = useState([]);

  const deleteComment = async (id) => {
    const commentsDoc = doc(db, "comments", id);
    await deleteDoc(commentsDoc);
  };

  const rootComments = query(commentsCollectionRef, where('parentId', '==', null))

  useEffect(() => {
    const getComments= async () => {
      const data = await getDocs(commentsCollectionRef);
      setCommentsList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getComments();
  }, [deleteComment]);

  return (
    <div className='comment-box'>
      
    </div>
  )
}
