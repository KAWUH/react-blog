import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import LoginPage from "./pages/LoginPage";
import MainPage from './pages/MainPage';
import CreatePostPage from './pages/CreatePostPage';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
        <Router>
          <nav className="top-navbar">
            <Link to="/"> Home </Link>
            <Link to="/login"> Login </Link>
            <Link to="/create"> Create Post </Link>
            <SearchBar/>
          </nav>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/create" element={<CreatePostPage />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
