import { useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Vehicles from './Vehicles';
import AddVehicleForm from './AddVehicleForm';
import SearchBar from './SearchBar';

function App() {

  const [car, setCars] = useState([]);

  const getAllVehicles = () => {
    axios.get('http://localhost:3200/vehicles/all')
    .then((res) => setCars(res.data))
    .catch((err) => console.warn(err))
  };

  const addNewVehicle = (newItem) => {
    axios.post('http://localhost:3200/vehicles/add', newItem)
      .then((res) => {
        setCars((prevVehicles) => [...prevVehicles, res.data])
      })
      .catch((err) => console.warn(err))
  };

  const deleteVehicle = (vehicleVin) => {
    axios.delete(`http://localhost:3200/vehicles/delete/${vehicleVin}`)
      .then((res) => {
        setCars((prevVehicles) => prevVehicles.filter((vehicle) => vehicle.vin !== vehicleVin));
      })
      .catch((err) => console.warn(err))
  };

  const editVehicle = (edits, vehicleVin) => {
    axios.put(`http://localhost:3200/vehicles/edit/${vehicleVin}`, edits)
      .then((res) => {
        setCars((prevVehicles) => prevVehicles.map((vehicle) => vehicle.vin !== vehicleVin ? vehicle : res.data))
      })
      .catch((err) => console.warn(err))
  };

  useEffect(() => {
    getAllVehicles();
  }, []);

  const vehicles = car.map((car) => 
  <Vehicles 
    editVehicle = {editVehicle}
    deleteVehicle = {deleteVehicle} 
    vehicle = {car} 
    key = {car.vin} />
  );

  const searchVehicles = (input) => {
    axios.get(`http://localhost:3200/vehicles/${input}`)
      .then((res) => {
        setCars((prevVehicles) => prevVehicles.filter((vehicle) => vehicle.make === input))
      })
      .catch((err) => console.warn(err))
  };

  return (
    <>
    <h1 className = 'header'>Car Garage</h1>
    <div className='search'>
      <SearchBar searchVehicles = {searchVehicles}/>
    </div>
    <div className = 'add-vehicle-section'>
      <AddVehicleForm addVehicle = {addNewVehicle} btnText = 'Add Vehicle'/>
    </div>
    <div className = 'vehicles'>{vehicles}</div>
    </>
  );
};

export default App;