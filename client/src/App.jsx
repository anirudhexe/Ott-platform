import './App.scss';
import Home from './pages/home/Home';
import Register from './pages/register/Register';
import Watch from './pages/watch/Watch';
import Login from './pages/login/Login';
import Subscription from './pages/subscription/Subscription'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from './authContext/AuthContext';

function App() {
  const {user}=useContext(AuthContext);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={user ? <Home /> : <Navigate to="/register" />} />
          
        <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />
          
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />}/>
        {user && (
          <>

            <Route path="/subscription" element={<Subscription />}/>

            <Route path="/movies" element={<Home type="movie" />}/>
        
            <Route path="/series" element={<Home type="series" />}/>
              
            <Route path="/watch" element={<Watch />}/>
              
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
