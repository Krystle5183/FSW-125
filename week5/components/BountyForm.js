import { useState } from "react";

function BountyForm({first, last, bountyAmount, type, submit, _id}) {
    
    const initialInputs = {first: first || '', last: last || '', bountyAmount: bountyAmount || 0, type: type || ''}
    const [inputs, setInputs] = useState(initialInputs)

    const handleChange = (e) => {
        const {name, value} = e.target
        setInputs(prevInput => ({...prevInput, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log('_id: ', _id)

        submit(inputs, _id)
        setInputs(initialInputs)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type='text'
                name='first'
                value={inputs.first}
                onChange={ handleChange }
                placeholder='FirstName'
            />
            <input 
                type='text'
                name='last'
                value={inputs.last}
                onChange={ handleChange }
                placeholder='LastName'
            />
            <input 
                type='number'
                name='bountyAmount'
                value={inputs.bountyAmount}
                onChange={ handleChange }
                placeholder='Bounty Amount'
            />
            <input 
                type='text'
                name='type'
                value={inputs.type}
                onChange={ handleChange }
                placeholder='Type'
            />
            <button>Post Bounty</button>
        </form>
    )
}

export default BountyForm;