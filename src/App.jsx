import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import CarList from "./components/CarList";
import Contato from "./components/Contato";
import Footer from "./components/Footer";

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <CarList />
      <Contato />
      <Footer />
    </>
  );
}

export default App;