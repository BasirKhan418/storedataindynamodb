import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Create from './Components/Create'
import Login from './Components/Login'
import Portfolio from './Components/Protfollio'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
const App = () => {
  const [istake,setisTake] = useState(false)
  return (
    <div className='dark:bg-black bg-white'>
    
      <Router>
      <Navbar istake={istake}/>
        <Routes>
          <Route path='/' element={<Create/>}/>
          <Route path='/login'   element={<Login setisTake={setisTake} />}/>
          <Route path='/protfollio' element={<Portfolio/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
