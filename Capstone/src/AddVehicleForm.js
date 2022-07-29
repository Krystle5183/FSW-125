import { useState } from 'react';

function AddVehicleForm({ addVehicle, btnText, color, year, make, model, trim, mileage, price, options, vin }) {

    const initialInputs = { 
        year: year || '', 
        make: make || '', 
        model: model || '',
        trim: trim || '',
        color: color || '',
        mileage: mileage || '',
        price: price || '',
        options: options || ''
    };

    const [inputs, setInputs] = useState(initialInputs);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs((prevInputs) => ({...prevInputs, [name]: value}));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addVehicle(inputs, vin);
        setInputs(initialInputs);
    }
    return (
        <>
        <form className = 'add-form' onSubmit = {handleSubmit}>
            <input className = 'inputs'
                type='text'
                name='year'
                value={inputs.year}
                onChange={handleChange}
                placeholder='Year of Vehicle'
                required />
            <input className = 'inputs'
                type='text'
                name='make'
                value={inputs.make}
                onChange={handleChange}
                placeholder='Make of Vehicle'
                required />
            <input className = 'inputs'
                type='text'
                name='model'
                value={inputs.model}
                onChange={handleChange}
                placeholder='Model of Vehicle'
                required />
            <input className = 'inputs'
                type='text'
                name='trim'
                value={inputs.trim}
                onChange={handleChange}
                placeholder='Trim of Vehicle'
                required />
            <input className = 'inputs'
                type='text'
                name='color'
                value={inputs.color}
                onChange={handleChange}
                placeholder='Color of Vehicle'
                required />
            <input className = 'inputs'
                type='text'
                name='mileage'
                value={inputs.mileage}
                onChange={handleChange}
                placeholder='Mileage of Vehicle'
                required />
            <input className = 'inputs'
                type='text'
                name='price'
                value={inputs.price}
                onChange={handleChange}
                placeholder='Price of Vehicle'
                required />
            <input className = 'inputs'
                type='text'
                name='options'
                value={inputs.options}
                onChange={handleChange}
                placeholder='Options of Vehicle'
                required />
            <button className = 'submit-button'>{btnText}</button>
        </form>
        </>
    );
};

export default AddVehicleForm;