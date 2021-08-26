import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/reset.css';
import MainSection from './components/MainSection/MainSection';
import Services from './components/Services/Services';
import Banner from './components/Banner/Banner';

function App() {
  return (
    <div>
      <MainSection />
      <Services/>
      <Banner />
    </div>
  );
}

export default App;
