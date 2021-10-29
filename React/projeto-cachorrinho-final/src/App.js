

import "./styles/Global.css"
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
