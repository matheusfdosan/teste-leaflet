import React, { useState, useEffect } from "react"
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import "./App.css"
import location from "./utils/location.json"

const LeafletMap = () => {
  const [locationData, setLocationData] = useState([])

  useEffect(() => {
    setLocationData(location)
  }, [])

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
