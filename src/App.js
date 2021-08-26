import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/reset.css';
import MainSection from './components/MainSection/MainSection';
import Services from './components/Services/Services';
import Banner from './components/Banner/Banner';
import Apointment from './components/Apointment/Apointment';

function App() {
  return (
    <div>
      <MainSection />
      <Services/>
      <Banner />
      <Apointment />
    </div>
  );
}

export default App;
