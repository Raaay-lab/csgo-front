// import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import '../src/styles/App.css';
import Header from './components/Header/Header';
import '../src/components/Nav/Nav.css';
import Footer from './components/Footer/Footer';
import '../src/components/Footer/Footer.css';
import MainContent from './components/MainContent/MainContent';
import '../src/components/MainContent/MainContent.css';
import PlayerCard from './components/PlayerCard/PlayerCard';
import '../src/components/PlayerCard/PlayerCard.css';
import Crosshairs from './components/Crosshairs/Crosshairs';
import ProPlayer from './components/ProPlayer/ProPlayer';
import Teams from './components/Teams/Teams';
import Tournaments from './components/Tournaments/Tournaments';

function App() {
  return (
    <div className="App">
      <Header>
      </Header>
      <Router>
        <Routes>
          <Route path="/" element={[<MainContent/>, <PlayerCard/>]}/>
          <Route path="/Crosshairs" element={<Crosshairs/>}/>
          <Route path="/ProPlayer" element={<ProPlayer/>}/>
          <Route path="/Teams" element={<Teams/>}/>
          <Route path="/Tournaments" element={<Tournaments/>}/>
        </Routes>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
