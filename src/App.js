import './App.css';
import { Socials } from './components/Socials'
import { Sections } from './components/Sections'
import { Hero } from './components/Hero'
import { CountdownTimer } from './components/Countdown'
import { useState, useEffect } from 'react'

function App() {
  const [content, setContent] = useState('welcome')
  const [hidden, setHidden] = useState(false)
  const [count, setCount] = useState(0)
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
    
      // setHidden(false)
      // setContent('welcome')
    
  }

  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
  
  return (
    <div className="App h-screen flex flex-col justify-between">
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
