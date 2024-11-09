import { useState } from 'react';
import './App.css';
import EarthquakeMap from './containers/earthquakemap/EarthquakeMap';
import EarthquakeFilter from './containers/earthquakemap/EarthquakeFilter';

function App() {
  const [filters, setFilters] = useState({
    minMagnitude: 0,
    maxMagnitude: 10,
    startDate: '',
    endDate: '',
  });

  return (
    <div className="App">
      <div className="FilterContainer">
        <h1 className="AppTitle">Earthquake Visualizer</h1>
        <EarthquakeFilter filters={filters} setFilters={setFilters} />
      </div>
      <div className="MapContainer">
        <EarthquakeMap filters={filters} />
      </div>
    </div>
  );
}

export default App;
