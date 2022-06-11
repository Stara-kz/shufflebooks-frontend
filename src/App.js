import './App.css';
import {Header} from "./components/Header";
import {Main} from './components/Main'
import {Footer} from "./components/Footer";
import {Routes, Route} from "react-router-dom";
import {Profile} from "./components/Profile";
import {Allbooks} from "./components/Allbooks";
import {Book} from './components/Book'
import {CreateBook} from "./components/CreateBook";

function App() {
  return (
       <>
        <div className="App">
            <Header/>
            <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path='/profile' element={<Profile/>}/>
                <Route path='/all-books' element={<Allbooks/>} />
                <Route path='/book' element={<Book/>} />
                <Route path='/createbook' element={<CreateBook/>} />
            </Routes>
            <Footer/>
            <hr style={{position: 'relative', bottom: '330px', height: '3px', width: '100vw', left: '-340px'}}/>
        </div>
    </>
  );
}

export default App;
