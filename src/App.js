import './App.css';
import { Socials } from './components/Socials'
import { Sections } from './components/Sections'
import { Hero } from './components/Hero'
import { CountdownTimer } from './components/Countdown'
import { useState, useEffect } from 'react'

function App() {
  const [content, setContent] = useState(<img className="w-72" src="nshoemake-logo.png" alt="logo" />)
  const [hidden, setHidden] = useState(false)
  const onClick = (heroText, showCounter) => {
    
    if (showCounter) {
      (() => {
        setHidden(true)
      })()
    } else {
      (() => {
        setHidden(false)
      })()
      setContent(heroText)
    }
    
  }
  
  useEffect(() => {
    const id = setTimeout(() => {
      setHidden(false)
      setContent(<img className="w-72" src="nshoemake-logo.png" alt="logo" />)
    }, 15000)
    return () => {
      clearInterval(id)
    }
  }, [hidden, content])

  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
  
  return (
    <div className="App h-screen flex flex-col justify-between bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500">
      {!hidden ? 
      <Hero content={content} /> 
      : 
      <CountdownTimer targetDate={dateTimeAfterThreeDays} />
      }
      
      <footer>
        <div className="flex justify-between m-8">
          <Sections onClick={onClick} />
          <Socials />
        </div>
      </footer>
    </div>
  );
}

export default App;
