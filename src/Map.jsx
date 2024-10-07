import React, { useState, useEffect } from "react"
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet"
import markerIcon from "./assets/vite.svg"
import location from "./utils/location.json"
import "leaflet/dist/leaflet.css"
import "./App.css"

const LeafletMap = () => {
  const [locationData, setLocationData] = useState([])

  useEffect(() => {
    setLocationData(location)
  }, [])

  const customIcon = new L.Icon({
    iconUrl: markerIcon,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  })

  return (
    <MapContainer
      className="mapPane"
      center={[-23.68524, -46.620502]}
      zoom={13}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locationData.map((data, index) => (
        <Marker
          key={data.id || index}
          icon={customIcon}
          position={[data.location.lat, data.location.long]}
        >
          <Tooltip>
            <b>{data.name}</b> {/* Nome do local exibido no Tooltip */}
          </Tooltip>
        </Marker>
      ))}
    </MapContainer>
  )
}

export default LeafletMap
