import { useState } from "react";
import LocationInfo from "./components/LocationInfo";
import PostalCodeForm from "./components/PostalCodeForm";

const App = () => {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchLocationInfo = (zipCode) => {
    setLoading(true);
    setError(null);

    fetch(`https://api.zippopotam.us/in/${zipCode}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Invalid postal code or location not found.");
        }
        return response.json();
      })
      .then((data) => {
        const result = {
          "post code": data["post code"],
          country: data.country,
          "country abbreviation": data["country abbreviation"],
          places: data.places.map((place) => ({
            "place name": place["place name"],
            longitude: place.longitude,
            state: place.state,
            "state abbreviation": place["state abbreviation"],
            latitude: place.latitude,
          })),
        };
        setLocation(result);
      })
      .catch((err) => {
        console.error("Error fetching location information:", err);
        setError("Could not fetch location information.");
      })
      .finally(() => setLoading(false));
  };

  const clearLocation = () => {
    setLocation(null);
  };

  return (
    <div className="App">
      <h1>Zip Code Information App</h1>
      <div className="zip-code-info">
        <PostalCodeForm onSubmit={fetchLocationInfo} />
        <LocationInfo
          location={location}
          loading={loading}
          error={error}
          onClear={clearLocation}
        />
      </div>
    </div>
  );
};

export default App;
