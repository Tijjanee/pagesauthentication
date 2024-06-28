import './App.css'
import Login from './Components/Login'
import Register from './Components/Register'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter basename='/pagesauthentication'>
        <Routes>
          <Route path='/' exact element={<Login/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
