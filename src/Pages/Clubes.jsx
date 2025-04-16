import clubes from "../Data/clubes.json";
import ClubCard from "../Components/ClubCard";

function Clubes() {
  return (
    <div className="max-w-screen-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Clubes de hockey sobre césped en Uruguay</h1>
      
      {/* Imagen que solo será visible en pantallas grandes */}
      <img
        src={"/logos/cima.png"}
        alt={`Logo`}
        className="fixed top-4 right-12 w-48 object-contain z-50 hidden lg:block"  // Se oculta en pantallas pequeñas
      />

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




