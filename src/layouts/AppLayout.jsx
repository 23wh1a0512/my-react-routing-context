import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'

const AppLayout = () => {
  return (
    <>
      <header style={{
        display: 'flex',
        justifyContent: 'flex-end', 
        width: '100%',
        height: '60px',
        alignItems: 'center',
        position: 'fixed',
        top:0}}>
        <Navbar />
      </header>
      <section style={{
        width: '100vw',
        height: '100vh',
        paddingTop:'60px'
      }}>
      <Outlet />
      </section>
      <footer style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '60px',
        backgroundColor: '#f1f1f1',
        position: 'fixed',
        bottom: 0
      }}>
        <p>&copy; 2024 Your Company. All rights reserved.</p>
        </footer>
    </>
  );
}

export default AppLayout