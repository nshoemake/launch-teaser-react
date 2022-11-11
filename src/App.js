import './App.css';
import { Sections } from './components/Sections'
import { Socials } from './components/Socials'
import { Hero } from './components/Hero'

function App() {
  return (
    <div className="App h-screen flex flex-col justify-between">
      <Hero />
      <footer>
        <div className="flex justify-between m-8">
          <Sections />
          <Socials />
        </div>
      </footer>
    </div>
  );
}

export default App;
