import React from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import markerIcon from "./assets/vite.svg"
import "./App.css"

function App() {
  const position = [-23.6865, -46.6234]

  // Definindo um novo ícone
  const customIcon = new L.Icon({
    iconUrl: markerIcon, // Caminho do ícone personalizado
    iconSize: [25, 41], // Tamanho do ícone
    iconAnchor: [12, 41], // Ponto de ancoragem (base do ícone)
    popupAnchor: [1, -34], // Onde o popup será ancorado em relação ao ícone
  })

  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={true}
      minZoom={8}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={customIcon}>
        <Popup>Vc está aqui amigo. Bem aqui!</Popup>
      </Marker>
    </MapContainer>
  )
}

export default App
