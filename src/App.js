import logo from './logo.svg';
import './App.css';
import './css/main.css'
import Navbar from './components/navbar'
import Main from './components/main';
import About from './components/about';
import Dark from './components/dark'
import Teams from './components/teams';
import Join from './components/join';
import Footer from './components/footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main/>
      <About/>
      <Dark/>
      <Teams/>
      <Join/>
      <Footer/>
    </div>
  );
}

export default App;
