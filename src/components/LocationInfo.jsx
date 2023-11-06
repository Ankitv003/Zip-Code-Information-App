import PropTypes from "prop-types";

const LocationInfo = ({ location, loading, error, onClear }) => {
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (location) {
    return (
      <div className="location-container">
        <p>Post Code: {location["post code"]}</p>
        <p>Country: {location.country}</p>
        <p>Country Abbreviation: {location["country abbreviation"]}</p>
        <p className="location-places">Places:</p>
        {location.places.map((place, index) => (
          <div key={index}>
            <div className="location-places-place">
              <p>Place Name: {place["place name"]}</p>
              <p>Longitude: {place.longitude}</p>
              <p>State: {place.state}</p>
              <p>State Abbreviation: {place["state abbreviation"]}</p>
              <p>Latitude: {place.latitude}</p>
            </div>
          </div>
        ))}
        <button className="clear-contents" onClick={onClear}>
          Clear
        </button>
      </div>
    );
  }

  return null;
};

// Defined PropTypes for the component
LocationInfo.propTypes = {
  location: PropTypes.shape({
    "post code": PropTypes.string,
    country: PropTypes.string,
    "country abbreviation": PropTypes.string,
    places: PropTypes.arrayOf(
      PropTypes.shape({
        "place name": PropTypes.string,
        longitude: PropTypes.string,
        state: PropTypes.string,
        "state abbreviation": PropTypes.string,
        latitude: PropTypes.string,
      })
    ),
  }),
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  onClear: PropTypes.func.isRequired,
};
export default LocationInfo;
