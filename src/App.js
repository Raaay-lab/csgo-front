// import logo from './logo.svg';
import '../src/styles/App.css';
import Header from './components/Header/Header';
import '../src/components/Nav/Nav.css';
import Footer from './components/Footer/Footer';
import '../src/components/Footer/Footer.css';
import MainContent from './components/MainContent/MainContent';
import '../src/components/MainContent/MainContent.css';
import PlayerCard from './components/PlayerCard/PlayerCard';
import '../src/components/PlayerCard/PlayerCard.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <MainContent></MainContent>
      <PlayerCard></PlayerCard>
      <Footer></Footer>
    </div>
  );
}

export default App;
