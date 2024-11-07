import React from 'react';
// import './css/PrimaryButton.css';

function PrimaryButton({ label, onClick, disabled }) {
    return (
        <button
            className="primary-button"
            onClick={onClick}
            disabled={disabled}
        >
            {label}
        </button>
    );
}

export default PrimaryButton;
