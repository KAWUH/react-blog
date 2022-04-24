import React from 'react'
import { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { auth, db } from "../firebase-config"
import { useNavigate } from 'react-router-dom'
import { storage } from "../firebase-config"
import { v4 } from 'uuid'
import { uploadBytes, ref } from 'firebase/storage';

export default function CreatePostPage() {

  let navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [tags, setTags] = useState("");
  const [postText, setPostText] = useState("");
  const [error, setError] = useState("");




  const [imageUpload, setImageUpload] = useState(null);

  const uploadImage = () => {
    if (imageUpload == null) return;
    const imageRef = ref( storage, `blog-images/${imageUpload.name}`)
    uploadBytes(imageRef, imageUpload).then(() => {
      alert("image uploaded");
    })
  };




  const types = ['image/png', 'image/jpeg'];

  const postsCollectionRef = collection( db, "posts" );

  const createPost = async () => {
    await addDoc(postsCollectionRef, {title: title, postText: postText, tags: tags, author: {name: auth.currentUser.displayName, id: auth.currentUser.uid}});

    navigate("/")
  };

  const newImageHandler = (e) => {
    let selected = e.target.files[0];
    console.log(selected);
    if(selected && types.includes(selected.type)){
      setFile(selected);
      setError('')
    }else{
      setFile(null);
      setError('Please select an image file (png or jpeg)')
    }
  }

  return (
    <div className='create-post-page'>
      <div className='inputGroup'>
        <label htmlFor = "pTitle">Title: </label>
        <input type="text" placeholder="Post title" id="pTitle" onChange={(event) => {setTitle(event.target.value)}}></input>
       </div>


       <div className='inputGroup'>
        <label htmlFor = "pTitle">Add post image: </label>
        <input type="file" id="pTitle" onChange = {(event) => {
          setImageUpload(event.target.files[0]);
        }}></input>
        <input type="button" value="upload image" onClick={uploadImage}/>


        { error && <div className='error'>{error}</div>}
        { file && <div className='fileName'>{file.name}</div>}

        
       </div>
       <div className='inputGroup'>
        <label htmlFor = "pTags" >Tags: </label>
        <input type="text" placeholder="Post tags" id="pTags" onChange={(event) => {setTags(event.target.value)}}></input>
       </div>
       <div className='inputGroup'>
        <label htmlFor = "pContent" >Post: </label>
        <textarea placeholder="Post content" id="pContent" onChange={(event) => {setPostText(event.target.value)}}></textarea>
       </div>
       <button onClick={createPost}>Submit Post</button>
      
    </div>
  )
}
