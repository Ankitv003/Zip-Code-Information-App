import { useState } from "react";
import PropTypes from "prop-types";

const PostalCodeForm = ({ onSubmitForm }) => {
  const [zipCode, setZipCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitForm(zipCode);
    setZipCode("");
  };

  const handleChange = (e) => {
    setZipCode(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="loc-input"
        placeholder="Enter Zip Code"
        value={zipCode}
        type="text"
        onChange={handleChange}
      />
      <button className="fetch-btn" type="submit">
        Fetch Location
      </button>
    </form>
  );
};

// Defined PropTypes for the component
PostalCodeForm.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};

export default PostalCodeForm;
