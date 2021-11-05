import './App.css';
import "./fonts/airbnb-cereal-app-cufonfonts-webfont/style.css";
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';


function App() {

  return (
    <div className="App">
      <span className="left-eclipse"></span>
      <span className="right-eclipse"></span>
      <Header />
      <Main />
      <Footer />
      
    </div>
  );
}

export default App;
