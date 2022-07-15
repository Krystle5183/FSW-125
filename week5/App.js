import './App.css';
import { useState, useEffect } from 'react'
import axios from "axios";
import Bounty from './components/Bounty';
import BountyForm from './components/BountyForm';

function App() {

  const [bounty, setBounty] = useState([])

  const getBounties = () => {
    axios.get('http://localhost:9000/bounties')
      .then(res => {
        //console.log('getBounties: ', res)
        setBounty(res.data)
      })
      .catch(err => console.log(err))
  }

  const addBounty = (newBounty) => {
    axios.post('http://localhost:9000/bounties', newBounty)
      .then(res => {
        //console.log('addBounty: ', res.data)
        setBounty(prevBounty => [...prevBounty, res.data])
      })
      .catch(err => console.log(err))
  } 

  const updateBounty = (updates, id) => {
    axios.put(`http://localhost:9000/bounties/${id}`, updates)
      .then(res => {
        setBounty(prevBounty => prevBounty.map(bounty => bounty._id !== id ? bounty : res.data))
      })
      .catch(err => console.log(err))
  }

  const deleteBounty = (id) => {
    console.log(id)
    axios.delete(`http://localhost:9000/bounties/${id}`)
      .then(res => {
        setBounty(prevBounty => prevBounty.filter(bounty => bounty._id !== id))
      })
      .catch(err => console.log(err))
  }

  const bountyList = bounty.map(bounties => 
    <Bounty {...bounties} updateBounty={updateBounty} deleteBounty={deleteBounty}/>
  )

  useEffect(() => {
    getBounties()
  }, [])
  
  return (
    <div className="App">
      <BountyForm submit={addBounty} />
      {bountyList}
    </div>
  );
}

export default App;