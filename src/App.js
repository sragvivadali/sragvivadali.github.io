import { useContext } from 'react'
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Photos from './components/Photos/Photo'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Contact from './components/Contact/Contact'
import ChatPopup from './components/ChatPopup/ChatPopup'
import Footer from './components/Footer/Footer'
import './App.css'

const App = () => {
  return (
    <div id='top' className='light app'>
      <Header />

      <main>
        <About />
        <Projects />
        <Skills />
        <Photos />
        <Contact />
      </main>

      <ChatPopup />
      <Footer />
    </div>
  )
}

export default App
