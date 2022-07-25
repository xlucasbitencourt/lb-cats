import 'bootstrap/dist/css/bootstrap.min.css';
import Clique from './components/Clique';
import Header from "./components/Header";
import MainBody from './components/MainBody';
import Menu from "./components/Menu";

function App() {
  return (
    <div className="App">
      <Menu />
      <Header />
      <Clique />
      <MainBody />
    </div>
  );
}

export default App;
