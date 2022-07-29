import { useState } from 'react';
import AddVehicleForm from './AddVehicleForm';

function Vehicles({vehicle, deleteVehicle, editVehicle}){

    const [editToggle, setEditToggle] = useState(false);

    return (
        <div className = 'vehicle-wrapper'>
            { !editToggle ?
                <>
                    <h1 className = 'vehicle-title'>--- {vehicle.year} {vehicle.make} {vehicle.model} ---</h1>
                    <div className = 'vehicle-options'>
                        <p>Mileage: {vehicle.mileage}</p>
                        <p>Color: {vehicle.color}</p>
                        <p>Trim: {vehicle.trim}</p>
                        <p>Options: {vehicle.options}</p>
                    </div>
                    <h3>Price: &#36;{vehicle.price}</h3>
                    <button 
                        onClick = {() => deleteVehicle(vehicle.vin)} 
                        className = 'delete-button'>
                        Remove
                    </button>
                    <button
                        onClick = {() => setEditToggle((prevToggle) => !prevToggle)}
                        className = 'edit-button'>
                        Edit
                    </button>
                </>
                
                :

                <>
                    <AddVehicleForm 
                        year = {vehicle.year}
                        make = {vehicle.make}
                        model = {vehicle.model}
                        trim = {vehicle.trim}
                        color = {vehicle.color}
                        mileage = {vehicle.mileage}
                        price = {vehicle.price}
                        options = {vehicle.options}
                        btnText = 'Process'
                        addVehicle = {editVehicle}
                        vin = {vehicle.vin}/> 
                        <button
                            onClick = {() => setEditToggle((prevToggle) => !prevToggle)}
                            className = 'close-button'>
                            Confirm Changes
                        </button>
                </>
            }
        </div>
    );
};

export default Vehicles;