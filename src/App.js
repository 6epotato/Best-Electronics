import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import NavBar from './Components/Header/NavBar'
import Footer from './Components/Footer/Footer';
import NotFound from './Components/NotFound/NotFound';
import Blogs from './Components/Blogs/Blogs';
import Fullpage from './Components/Authentication/Fullpage/Fullpage';
import FullpageRegister from './Components/Authentication/Fullpage/FullpageRegister';
import ItemDetail from './Components/Inventory/ItemDetail/ItemDetail';
import Items from './Components/Inventory/Items/Items';
import AddItem from './Components/Inventory/AddItem/AddItem';
import RequireAuth from './Components/Authentication/Login/RequireAuth';
import MyItem from './Components/Inventory/MyItem/MyItem';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/item' element={
          <RequireAuth>
            <Items></Items>
          </RequireAuth>
        }></Route>
        <Route path='/item/:itemId' element={
          <RequireAuth>
            <ItemDetail></ItemDetail>
          </RequireAuth>}></Route>
        <Route path='/additem' element={<AddItem></AddItem>}></Route>
        <Route path='/myitem' element={
          <RequireAuth>
            <MyItem></MyItem>
          </RequireAuth>
        }></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Fullpage></Fullpage>}></Route>
        <Route path='/register' element={<FullpageRegister></FullpageRegister>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
