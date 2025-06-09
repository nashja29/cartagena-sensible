import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

const puntosCriticos = [
  {
    nombre: 'Ciénaga de la Virgen',
    coords: [10.435, -75.482]
  },
  {
    nombre: 'Caño Juan Angola',
    coords: [10.424, -75.534]
  }
]

const icon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41]
})

export default function MapaAmbiental() {
  return (
    <MapContainer center={[10.4236, -75.5253]} zoom={12} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {puntosCriticos.map((punto, i) => (
        <Marker key={i} position={punto.coords} icon={icon}>
          <Popup>{punto.nombre}</Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}