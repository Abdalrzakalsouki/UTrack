"use client";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { useRef, useEffect } from "react";
import styles from "./page.module.scss";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";
const Map = ({
  latitude,
  longitude,
}: {
  latitude: number;
  longitude: number;
}) => {
  const mapLocation = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (mapLocation.current) {
      mapLocation.current.scrollIntoView();
    }
  }, [mapLocation]);
  return (
    <div ref={mapLocation}>
      <MapContainer
        center={[latitude, longitude]}
        zoom={13}
        className={styles.map}
        scrollWheelZoom={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        />
        <Marker position={[latitude, longitude]} />
      </MapContainer>
    </div>
  );
};
export default Map;
