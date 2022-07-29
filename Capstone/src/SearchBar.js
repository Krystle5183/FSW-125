import { useState } from 'react';

function SearchBar({ searchVehicles }) {

    const [input, setInput] = useState('');

    const getInput = (e) => {
        let storeInput = e.target.value;
        let upperCaseInput = storeInput[0].toUpperCase() + storeInput.slice(1).toLowerCase();
        setInput(upperCaseInput);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        searchVehicles(input);
        setInput('');
    };

    return (
        <>
            <form onSubmit = {onSubmit}>
                <label>Search by Make: </label>
                <input
                    onChange = {getInput}
                    name = 'make'
                    className='input-bar'
                    type = 'text'
                    placeholder='Search Vehicles'
                    >
                </input>
                <button className = 'search-button'>Search</button>
            </form>
        </>
    );
};

export default SearchBar;