import './App.css';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';

// App Component -- Ideal place for you to have the layout
// Functional Component -with named fn
function App() {
  return (
    <div className="App">
      <Header />

      <div className="mt-5">
        <h1 className='red'>Success!!!!!!</h1>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;
