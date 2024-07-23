import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/login'

function App() {
  return (
    <>
      <BrowserRouter>
        <div className='bg-slate-800 h-[100vh] py-3 px-5'>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/home' element={<Home />} />
            <Route path='*' element={<div>Not Found</div>} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
