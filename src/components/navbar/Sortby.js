import React, { useState } from 'react';
import "./dropdown.css";

function Sortby() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const options = [
    { id: 1, label: 'Price' },
    { id: 2, label: 'Name' },
  ];

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        Toggle Dropdown
      </button>
      {isOpen && (
        <div className="dropdown-options">
          {options.map((option) => (
            <button key={option.id} className="dropdown-option">
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Sortby;
