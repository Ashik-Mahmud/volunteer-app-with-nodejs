import { Route, Routes } from 'react-router-dom';
import './App.css';
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
function App() {
  return (
    <>
      <Header />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/donations' element={<Donations />} />
          <Route path='/events' element={<Events />} />
          <Route path='/blogs' element={<Blogs />} />

          {/* login  */}
          <Route path='/login' element={<Login />} />
          <Route path='/sign-up' element={<SignUp />} />

          {/* require routes */}
          <Route path='/add-event' element={<AddEvents />} />
          <Route path='/volunteer-list' element={<VolunteersList />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
