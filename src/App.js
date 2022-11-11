import './App.css';
import { Sections } from './components/Sections'
import { Socials } from './components/Socials'
import { Hero } from './components/Hero'
import { useState } from 'react'


function App() {
  const [content, setContent] = useState('welcome')
  const onClick = () => {
    if (content === 'welcome') {
      setContent('more info')
    } else if (content === 'more info') {
      setContent('counter')
    }
    return null
  }
  return (
    <div className="App h-screen flex flex-col justify-between">
      <Hero content={content} />
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
