# Earthquake Visualizer

This application provides an interactive map to visualize recent earthquake activity around the world. It uses the USGS Earthquake API to display real-time seismic data, making it a helpful tool for geography students, researchers, and anyone interested in understanding global seismic patterns.

## Features

- **Live Earthquake Data**: Fetches real-time earthquake data from the USGS Earthquake API.
- **Interactive Map**: Visualizes earthquake locations with interactive markers.
- **User-Friendly Interface**: Simple, intuitive map with zoom and pan features for easy navigation.
  
## Tech Stack

- **Mapping Library**: [Leaflet](https://leafletjs.com/)
  - **React**: [react-leaflet](https://react-leaflet.js.org/)
  - **Svelte**: [svelte-leaflet](https://github.com/benmccann/svelte-leaflet)
- **Data Source**: [USGS Earthquake API](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php)

## API Information

- **USGS Earthquake API**: Provides earthquake data in GeoJSON format. This app uses the daily summary feed:  
  [https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson](https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson)

## Setup Instructions

### Prerequisites

- Node.js and npm (or yarn)
- An understanding of either React or Svelte

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/earthquake-visualizer.git
   cd earthquake-visualizer

2. **Navigate to the project directory**:

   ```bash
   cd book-finder

3. **Install dependencies**:

   ```bash
   npm install

4. **Start the application:**:

   ```bash
   npm run dev

5. Open http://localhost:5173 in your browser to view the application.
