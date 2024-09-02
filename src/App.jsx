import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { YearsPage } from './presupuesto/pages/YearsPage'
import { AppRouter } from './router/AppRouter'
import { Navbar } from './presupuesto/components/Navbar'

function App() {

  return (
    <div className='container-fluid'>
      <Navbar />
      <AppRouter />
    </div>
  )
}

export default App
