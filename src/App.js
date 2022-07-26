import 'bootstrap/dist/css/bootstrap.min.css';
import CatForm from './components/CatForm';
import CatList from './components/CatList';
import Clique from './components/Clique';
import Footer from './components/Footer';
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
      <CatList />
      <Clique />
      <CatForm />
      <Footer />
    </div>
  );
}

export default App;
