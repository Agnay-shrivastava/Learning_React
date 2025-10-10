import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import MainTaskDashboard from '../components/MainTaskDashboard'

const Layout  = () => {
  return (
    <div className='h-screen flex flex-col'>
      <Header />
      <div className='flex flex-1 min-h-0 overflow-hidden'>
        <Sidebar />
        <MainTaskDashboard />
      </div>
      
    </div>
  )
}

export default Layout