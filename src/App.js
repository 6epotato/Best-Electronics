import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import NavBar from './Components/Header/NavBar'
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
