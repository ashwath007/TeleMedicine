import './App.css';
import LandingPage from './components/LandingPage';
import Landingpage_body from './components/Landingpage_body';
import Services from './components/Services';
import BottomFront from './components/BottomFront';
import Footer from './components/Footer';
function App() {
	return (
		<div>
			<LandingPage />
			<Landingpage_body />
			<Services />
			<BottomFront />
			<Footer />
		</div>
	);
}

export default App;
