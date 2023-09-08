import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ percentage }) => {
    return (
        <div className="progress-bar">
            <div className="filler" style={{ width: `${percentage}%` }}></div>
        </div>
    );
};

export default ProgressBar;
