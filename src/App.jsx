import React, { Suspense } from 'react'
import './App.css'
import AvailableTickets from './components/AvailableTickets/AvailableTickets'
import SelectedTickets from './components/SelectedTickets/SelectedTickets'
import Navbar from './components/Navbar/Navbar'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer/Footer';

const fetchInfo = async () => {
  const res = await fetch('/info.json')
  return res.json()
}
const infoPromise = fetchInfo()

function App() {
  return (
    <>
      <div>
        <header>
          <Navbar></Navbar>
        </header>
        {/* <section>
        </section> */}
        <section>
            <Suspense fallback={<div>Loading...</div>}>
              <AvailableTickets infoPromise={infoPromise}></AvailableTickets>
            </Suspense>
        </section>
        <footer>
          <Footer></Footer>
        </footer>
        <ToastContainer position="top-right" autoClose={3000}></ToastContainer>
      </div>
    </>
  )
}

export default App 
