import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const IndiaMap = () => {
  const [geoData, setGeoData] = useState(null);

  useEffect(() => {
    fetch("/states.geojson") // Adjust the path if necessary
      .then((response) => response.json())
      .then((data) => setGeoData(data))
      .catch((error) => console.error("Error loading GeoJSON:", error));
  }, []);

  const onEachState = (feature, layer) => {
    layer.setStyle({
      color: "black", // Black border
      weight: 2,
      fillColor: "lightgray",
      fillOpacity: 0.7,
    });

    layer.on("mouseover", function () {
      this.setStyle({
        fillColor: "orange", // Highlight on hover
        fillOpacity: 1,
      });
    });

    layer.on("mouseout", function () {
      this.setStyle({
        fillColor: "lightgray",
        fillOpacity: 0.7,
      });
    });

    if (feature.properties && feature.properties.NAME_1) {
      layer.bindTooltip(feature.properties.NAME_1); // Show state name
    }
  };

  return (
    <MapContainer center={[22, 80]} zoom={5} style={{ height: "100vh", width: "100%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {geoData && <GeoJSON data={geoData} onEachFeature={onEachState} />}
    </MapContainer>
  );
};

export default IndiaMap;
