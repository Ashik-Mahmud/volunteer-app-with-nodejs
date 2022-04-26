import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from "./Pages/Blogs/Blogs";
import Events from "./Pages/Events/Events";
import Home from "./Pages/Home/Home/Home";
import Volunteers from './Pages/Home/Volunteers/Volunteers';
import Footer from "./Shared/Footer/Footer";
import Header from "./Shared/Header/Header";
function App() {
  return (
    <>
      <Header />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/donations' element={<Volunteers />} />
          <Route path='/events' element={<Events />} />
          <Route path='/blogs' element={<Blogs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
