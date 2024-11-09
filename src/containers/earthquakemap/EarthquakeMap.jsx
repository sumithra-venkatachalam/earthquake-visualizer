import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Circle, Popup } from 'react-leaflet';
import axios from 'axios';

function EarthquakeMap({ filters }) {
  const [earthquakes, setEarthquakes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson'
      );
      setEarthquakes(response.data.features);
    };
    fetchData();
  }, [filters]);

  return (
    <MapContainer
      center={[20, 0]}
      zoom={2}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {earthquakes
        .filter((quake) => {
          const mag = quake.properties.mag;
          return mag >= filters.minMagnitude && mag <= filters.maxMagnitude;
        })
        .map((quake) => {
          const [longitude, latitude] = quake.geometry.coordinates;
          const magnitude = quake.properties.mag;

          return (
            <Circle
              key={quake.id}
              center={[latitude, longitude]}
              radius={magnitude * 10000}
              color="red"
              fillOpacity={0.5}
            >
              <Popup>
                <strong>{quake.properties.place}</strong>
                <br />
                Magnitude: {magnitude}
                <br />
                Depth: {quake.geometry.coordinates[2]} km
                <br />
                Date: {new Date(quake.properties.time).toLocaleString()}
              </Popup>
            </Circle>
          );
        })}
    </MapContainer>
  );
}

export default EarthquakeMap;
