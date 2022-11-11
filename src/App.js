import './App.css';
import { Sections } from './components/Sections'
import { Socials } from './components/Socials'
import { Hero } from './components/Hero'
import { useState } from 'react'


function App() {
  const [content, setContent] = useState(null)
  const onClick = () => {
    
    return null
  }
  return (
    <div className="App h-screen flex flex-col justify-between">
      <Hero content='WOW!' />
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
