import React, { useState } from "react";

const SelectBox = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelect = (e) => {
    const selectedOption = e.target.value;
    setSelectedOptions((prevOptions) => [...prevOptions, selectedOption]);
  };

  const handleDelete = (option) => {
    setSelectedOptions((prevOptions) =>
      prevOptions.filter((selectedOption) => selectedOption !== option)
    );
  };

  return (
    <div>
      <select onChange={handleSelect} className="form-control col-md-4">
        <option value="">Select an option</option>
        <option value="Option 1">Option 1</option>
        <option value="Option 2">Option 2</option>
        <option value="Option 3">Option 3</option>
      </select>
      <ul className="row mt-4">
        {selectedOptions.map((option, index) => (
          <li key={index} className="route-list">
            {option}
            <button onClick={() => handleDelete(option)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectBox;
