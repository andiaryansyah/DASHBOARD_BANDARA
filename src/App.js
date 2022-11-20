import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Landingpage, Login, Register } from './pages';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/dashboard' element={<Landingpage />}/>
      <Route path='/' element={<Login />}/>
      <Route path='/register' element={<Register />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
