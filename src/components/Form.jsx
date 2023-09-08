import React, { useState } from 'react';

function Form({ onFormSubmit, showForm, toggleForm }) {
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onFormSubmit(name);
        toggleForm()
        setName('')
    };
    return (
        <div className={`form-container ${showForm ? 'show-form' : ''}`}>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Ingrese el nombre..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className='input__text'
                />
                <button type="submit" className='btn__submit'>Buscar</button>
            </form>
            <button onClick={toggleForm} className='close__btn'>X</button>
        </div>
    );
}

export default Form;






