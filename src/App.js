import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import LoginPage from "./pages/LoginPage";
import MainPage from './pages/MainPage';
import CreatePostPage from './pages/CreatePostPage';
import SearchBar from './components/SearchBar';
import { useState } from 'react';
import { signOut } from 'firebase/auth'
import { auth } from './firebase-config'
import ArticlePage from './pages/ArticlePage';

function App() {
  const[isLoggedIn, setIsLoggedIn] = useState(false);

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear()
      setIsLoggedIn(false)
      window.location.pathname = "/login";
    })
  }

  const [post, setPost] = useState()



  return (
    <div className="App">
        <Router>
          <nav className="top-navbar">
            <Link to="/"> Home </Link>
            {!isLoggedIn ? <Link to="/login"> Login </Link> : <button onClick={signUserOut}> Log Out </button>}
            {isLoggedIn && <Link to="/create"> Create Post </Link>}
            <SearchBar/>
          </nav>
          <Routes>
            <Route path="/" element={<MainPage setPost = {setPost} />} />
            <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/create" element={<CreatePostPage />} />
            <Route path="/article" element={<ArticlePage post = {post} />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
