import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Agence from './pages/Agence'
import Projects from './pages/Projects'
import Loader from './pages/loader.jsx'
import Navbar from './Navigation/Navbar'
import FullScreenNav from './Navigation/FullScreenNav'

const App = () => {


  return (
    <div className='text-white'>
      <Loader />
      <Navbar/>
      <FullScreenNav />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/agence' element={<Agence />}/>
          <Route path='/projects' element={<Projects />}/>
        </Routes> 
    </div>
  )
}

export default App