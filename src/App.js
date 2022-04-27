import { createContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import './App.css';
import RequireAuth from './Auth/RequireAuth';
import useFirebase from './Hooks/useFirebase';
import AddBlog from './Pages/AddBlog/AddBlog';
import AddEvents from './Pages/AddEvents/AddEvents';
import BlogDetails from './Pages/Blogs/BlogDetails/BlogDetails';
import Blogs from "./Pages/Blogs/Blogs";
import Donations from './Pages/Donations/Donations';
import Events from "./Pages/Events/Events";
import UpdateEvent from './Pages/Events/UpdateEvent/UpdateEvent';
import Home from "./Pages/Home/Home/Home";
import Login from './Pages/Login/Login/Login';
import SignUp from "./Pages/Login/SignUp/SignUp";
import ManageBlogs from './Pages/ManageBlogs/ManageBlogs';
import UpdateBlog from './Pages/ManageBlogs/UpdateBlog/UpdateBlog';
import NotFound404 from './Pages/NotFound404/NotFound';
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
          <Route path='/blog-details/:blogId' element={<BlogDetails />} />

          {/* login  */}
          <Route path='/login' element={<Login />} />
          <Route path='/sign-up' element={<SignUp />} />

          {/* require routes */}
          <Route path='/events' element={<RequireAuth><Events /></RequireAuth>} />
          <Route path='/add-event' element={<RequireAuth><AddEvents /></RequireAuth> } />
          <Route path='/update-event/:updateId' element={<RequireAuth><UpdateEvent /></RequireAuth> } />
          <Route path='/volunteer-list' element={<RequireAuth><VolunteersList /></RequireAuth>} />
          <Route path='/add-blog' element={<RequireAuth><AddBlog /></RequireAuth>} />
          <Route path='/update-blog/:blogId' element={<RequireAuth><UpdateBlog /></RequireAuth>} />
          <Route path='/manage-blogs' element={<RequireAuth><ManageBlogs /></RequireAuth>} />

          {/* Not found Route  */}
          <Route path='*' element={<NotFound404 />} />
          
      </Routes>
      <Footer />
    </AppContext.Provider>
    </>
  );
}

export default App;
