import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import LoginPage from "./pages/LoginPage";
import MainPage from './pages/MainPage';
import CreatePostPage from './pages/CreatePostPage';
import SearchBar from './components/SearchBar';
import {useEffect, useState } from 'react';
import { signOut } from 'firebase/auth'
import { auth, db } from './firebase-config'
import ArticlePage from './pages/ArticlePage';
import { getDocs, collection } from 'firebase/firestore'

function App() {
  const[isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchRes, setSearchRes] = useState([]);
  const [post, setPost] = useState()
  const [postsList, setPostsList] = useState([]);
  const postsCollectionRef = collection( db, "posts" );

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear()
      setIsLoggedIn(false)
      window.location.pathname = "/login";
    })
  }

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostsList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, []);

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newPostsList = postsList.filter((post) => {
        return Object.values(post)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchRes(newPostsList);
      console.log(newPostsList);
    } else {
      setSearchRes(postsList);
    }
    
  }

  return (
    <div className="App">
        <Router>
          <nav className="top-navbar">
            {!isLoggedIn ? <Link to="/login"> Login </Link> : <button onClick={signUserOut} className='logout'> Log Out </button>}
            {isLoggedIn && <Link to="/create"> Create Post </Link>}
            <Link to="/"> Home </Link>
            <SearchBar term={searchTerm} searchKeyword={searchHandler}/>
          </nav>
          <Routes>
            <Route path="/" element={<MainPage setPost = {setPost} searchRes={searchRes}/>} />
            <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/create" element={<CreatePostPage />} />
            <Route path="/article" element={<ArticlePage post = {post} />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
