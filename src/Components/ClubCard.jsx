import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import {
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";
import L from "leaflet";

function ClubCard({ club }) {
  const position = [club.coordenadas.lat, club.coordenadas.lng];

  return (
    <div className="bg-cyan-900 shadow-lg rounded-xl p-6 w-full mx-auto">
      {/* Contenedor para centrar el texto y las redes sociales */}
      <div className="flex flex-col items-center text-center text-white">
        {club.imagen && (
          <img
            src={club.imagen}
            alt={`Imagen de ${club.nombre}`}
            className="w-full h-48 object-contain"
          />
        )}
        <h2 className="text-xl font-semibold text-white">{club.nombre}</h2>
        <p className="mt-2">
          📍 {club.direccion}, {club.departamento}, {club.barrio}
        </p>
        <p className="mt-2 text-sm whitespace-pre-line"> Categorías: {club.categorias.join("")}</p>
        <p className="mt-2 text-sm whitespace-pre-line">🕒 Horarios: {club.horarios.join("")}</p>
        <p className="mt-2">✉️ {club.telefono}</p>

        {/* Iconos de redes sociales */}
        <div className="mt-4 flex space-x-6">
          {club.redes_sociales.facebook && (
            <a
              href={club.redes_sociales.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-pink-800 dark:text-white"
            >
              <FaFacebook size={30} />
            </a>
          )}
          {club.redes_sociales.instagram && (
            <a
              href={club.redes_sociales.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 hover:text-pink-800 dark:text-white"
            >
              <FaInstagram size={30} />
            </a>
          )}
          <a
            href={club.contacto}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-white rounded-lg dark:text-white dark:hover:text-pink-800 transition duration-300"
          >
            <FaWhatsapp size={30} />
          </a>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${club.coordenadas.lat},${club.coordenadas.lng}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:text-pink-800 dark:text-white"
            title="Ver en Google Maps"
          >
            <FaMapMarkerAlt size={30} />
          </a>
        </div>
      </div>

      {/* Mapa */}
      <div className="mt-4">
        <MapContainer
          center={position}
          zoom={15}
          scrollWheelZoom={false}
          style={{ height: "300px", width: "100%" }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker
            position={position}
            icon={
              new L.Icon({
                iconUrl:
                  "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
              })
            }
          >
            <Popup>{club.nombre}</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}

export default ClubCard;

