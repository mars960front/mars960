import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/login'

function App() {
  return (
    <>
<<<<<<< HEAD
<<<<<<< HEAD
      <p>holvooooy</p>
=======
      <div className='bg-slate-800 h-[100vh] py-3 px-5'>
        <Home />
      </div>
>>>>>>> acf50a8cdb2df26fc80d133831ced03ba69b6497
=======
      <BrowserRouter>
        <div className='bg-slate-800 h-[100vh] py-3 px-5'>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/home' element={<Home />} />
            <Route path='*' element={<div>Not Found</div>} />
          </Routes>
        </div>
      </BrowserRouter>
>>>>>>> 84eef827f969977e002568906f53e3149b405dbe
    </>
  )
}

export default App
