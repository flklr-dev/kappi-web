import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import PlantingMap from './pages/PlantingMap';
import TrendAnalysis from './pages/TrendAnalysis';
import DiseaseTracking from './pages/DiseaseTracking';
import Reports from './pages/Reports';
import './App.css';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/map" element={<PlantingMap />} />
          <Route path="/analysis" element={<TrendAnalysis />} />
          <Route path="/diseases" element={<DiseaseTracking />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
