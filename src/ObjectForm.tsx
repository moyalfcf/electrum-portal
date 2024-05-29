import React, { useState } from 'react';

function ObjectForm({ object, onSubmit }) {
    const [formData, setFormData] = useState(object);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            {Object.entries(formData).map(([key, value]) => (
                <div key={key}>
                    <label htmlFor={key}>{key}:</label>
                    {typeof value === 'boolean' ? (
                        <input
                            type="checkbox"
                            id={key}
                            name={key}
                            checked={value}
                            onChange={handleChange}
                        />
                    ) : (
                        <input
                            type="text"
                            id={key}
                            name={key}
                            value={String(value)}
                            onChange={handleChange}
                        />
                    )}
                </div>
            ))}
            <button type="submit">Save</button>
        </form>
    );
}

export default ObjectForm;