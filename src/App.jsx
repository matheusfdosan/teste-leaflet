import React from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
// import "leaflet/dist/leaflet.css"
import "./App.css"

function App() {
  const position = [-23.6865, -46.6234]

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
      <Marker position={position}>
        <Popup>Vc está em São Paulo amigo</Popup>
      </Marker>
    </MapContainer>
  )
}

export default App
