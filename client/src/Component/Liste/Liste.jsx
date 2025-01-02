import React from 'react';

import { useNavigate } from 'react-router-dom';
import './Liste.css';

const SelectButton = () => {
    const navigate = useNavigate();

    const handleChange = (event) => {
        const selectedValue = event.target.value;
        if (selectedValue) {
            navigate(selectedValue); // Navigate to the selected route
        }
    };

    return (
        <div>
            <select onChange={handleChange} defaultValue="">
                <option value="" disabled>Select an option</option>
                <option value="/livre-de-paie">LIVRE DE PAIE</option>
                <option value="/registre-des-conges-payes">REGISTRE DES CONGES PAYES</option>
            </select>
        </div>
    );
};

export default SelectButton;
