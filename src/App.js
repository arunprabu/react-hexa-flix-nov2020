import './App.css';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import ProgramList from './containers/ProgramList/ProgramList';
import ChannelList from './containers/ChannelList/ChannelList';
import TrendingShows from './containers/TrendingShows/TrendingShows';

// App Component -- Ideal place for you to have the layout
// Functional Component -with named fn
function App() {
  return (
    <div className="App">
      <Header version="1.0"/>

      <div className="mt-5">
        <br />
        <h1>Welcome to My Fav Program App!</h1>
        <hr />
        <ProgramList />
        <hr />
        <ChannelList />
        <hr />
        <TrendingShows />
      </div>

      <Footer year='2020'></Footer>
    </div>
  );
}

export default App;
