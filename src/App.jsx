import { useEffect } from 'react';
import './App.css';
import Pages from './components/pages/Mypages.jsx'
import AOS from "aos"
import "aos/dist/aos.css"
function App() {

  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  return (
    <>
      <Pages></Pages>
    </>
  )
}

export default App;
