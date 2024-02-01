import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import Home from './Pages/Home'
import About from './Pages/About';
import Footer from './components/Home/Footer';
import Hospital from './Pages/Hospital';
import Contact from './Pages/Contact';
function App() {
  return (
     <Router>
     <Header/>

     <Routes>
            <Route element={<Home/> } exact path="/" />
            <Route element={<About/> } exact path="/About" />
            <Route element={<Hospital/> } exact path="/Hospital" />
            <Route element={<Contact/> } exact path="/Contact" />

     </Routes>
  <Footer/> 
     </Router>
  );
}

export default App;
