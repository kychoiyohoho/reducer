import {Home} from './components/Home';
import {AddUser} from './components/AddUser';
import {EditUser} from './components/EditUser';
import {Routes, Route, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {GlobalState} from './states/GlobalState';
function App() {
  return (
    <div style={{maxWidth:"30rem", margin:"4rem auto"}}>
      <GlobalState>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/add" element={<AddUser/>} />
            <Route exact path="/edit/:id" element={<EditUser/>} />       
          </Routes>
        </BrowserRouter> 
     </GlobalState>
    </div>
  );
}

export default App;
