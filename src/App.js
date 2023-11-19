import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import Main from './path/Main';
import Detail from './path/Detail';
import Add from './path/Add';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/detail/:productId' element={<Detail />} />
        <Route path='/add' element={<Add />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App;
