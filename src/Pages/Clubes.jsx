import { useState } from "react";
import clubesData from "../Data/clubes.json";
import ClubCard from "../Components/ClubCard";

function Clubes() {
  const [clubes, setClubes] = useState(clubesData);
  const [modalAbierto, setModalAbierto] = useState(false);
  const [departamentoSeleccionado, setDepartamentoSeleccionado] = useState("");

  // Obtener lista única de departamentos
  const departamentos = [...new Set(clubesData.map(c => c.departamento))];

  // Filtrar por departamento
  const filtrarPorDepartamento = (departamento) => {
    const filtrados = clubesData.filter(
      (club) => club.departamento === departamento
    );
    setClubes(filtrados);
    setDepartamentoSeleccionado(departamento);
    setModalAbierto(false);
  };

  // Limpiar filtro
  const limpiarFiltro = () => {
    setClubes(clubesData);
    setDepartamentoSeleccionado("");
  };

  return (
    <div className="max-w-screen-xl mx-auto p-6">
      {/* Logo */}
      <img
        src={"/logos/cima.png"}
        alt={`Logo`}
        className="fixed top-4 right-12 w-48 object-contain z-50"
      />

      <h1 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">
        Clubes de hockey sobre césped en Uruguay
      </h1>

      {/* Botones de filtro */}
      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={() => setModalAbierto(true)}
          className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 dark:bg-purple-700 dark:hover:bg-purple-600"
        >
          Filtrar por Departamento
        </button>
        <button
          onClick={limpiarFiltro}
          className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 dark:bg-purple-700 dark:hover:bg-purple-600"
        >
          Ver todos
        </button>
      </div>

      {departamentoSeleccionado && (
        <p className="text-center mb-4 text-gray-800 dark:text-gray-200">
          Mostrando clubes de: <strong>{departamentoSeleccionado}</strong>
        </p>
      )}

      {/* Modal */}
      {modalAbierto && (
        <div className="fixed inset-0 bg-transparent flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg max-w-sm w-full">
            <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
              Seleccioná un departamento
            </h2>
            <ul className="space-y-2">
              {departamentos.map((dep) => (
                <li key={dep}>
                  <button
                    onClick={() => filtrarPorDepartamento(dep)}
                    className="w-full text-left px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded text-gray-900 dark:text-white"
                  >
                    {dep}
                  </button>
                </li>
              ))}
            </ul>
            <button
              onClick={() => setModalAbierto(false)}
              className="mt-4 w-full px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}

      {/* Grid con 2 columnas para pantallas medianas y 3 para pantallas grandes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {clubes.map((club, index) => (
          <ClubCard key={index} club={club} />
        ))}
      </div>
    </div>
  );
}

export default Clubes;
