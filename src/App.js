import { createContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import './App.css';
import RequireAuth from './Auth/RequireAuth';
import useFirebase from './Hooks/useFirebase';
import AddEvents from './Pages/AddEvents/AddEvents';
import Blogs from "./Pages/Blogs/Blogs";
import Donations from './Pages/Donations/Donations';
import Events from "./Pages/Events/Events";
import Home from "./Pages/Home/Home/Home";
import Login from './Pages/Login/Login/Login';
import SignUp from "./Pages/Login/SignUp/SignUp";
import VolunteersList from './Pages/VolunteersList/VolunteersList';
import Footer from "./Shared/Footer/Footer";
import Header from "./Shared/Header/Header";
export const AppContext = createContext(null);
function App() {
    const { isAuth} = useFirebase();
        
  return (
    <>
    <ToastContainer />
    <AppContext.Provider value={{isAuth}}>
      <Header />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/donations' element={<Donations />} />
          <Route path='/blogs' element={<Blogs />} />

          {/* login  */}
          <Route path='/login' element={<Login />} />
          <Route path='/sign-up' element={<SignUp />} />

          {/* require routes */}
          <Route path='/events' element={<RequireAuth><Events /></RequireAuth>} />
          <Route path='/add-event' element={<RequireAuth><AddEvents /></RequireAuth> } />
          <Route path='/volunteer-list' element={<RequireAuth><VolunteersList /></RequireAuth>} />
      </Routes>
      <Footer />
    </AppContext.Provider>
    </>
  );
}

export default App;
