export default function Search({ searchTerm, cars }) {
    const filteredCars = cars.filter((car) =>
      car.name.toLowerCase().includes(searchTerm?.toLowerCase() ?? '')
    );
  
    return (
      <div>
        <h1>Résultats de la recherche</h1>
        {filteredCars.length === 0 ? (
          <p>Aucune voiture trouvée pour le terme de recherche "{searchTerm}"</p>
        ) : (
          <div>
            {filteredCars.map((car) => (
              <div key={car._id}>
                <h2>{car.name}</h2>
                <p>{car.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  
  