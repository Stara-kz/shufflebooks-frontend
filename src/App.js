import './App.css';
import {Header} from "./components/Header";
import {Main} from './components/Main'
import {Footer} from "./components/Footer";
import {Routes, Route} from "react-router-dom";
import {Profile} from "./components/Profile";
function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/profile' element={<Profile/>}/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
