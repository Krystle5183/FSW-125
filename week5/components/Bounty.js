import { useState } from "react";
import BountyForm from './BountyForm'

function Bounty ({first, last, bountyAmount, type, _id, updateBounty, deleteBounty}) {
    // console.log(props)

    const [editToggle, setEditToggle] = useState(false)

    function setToggle(toggle) {
        setEditToggle(toggle)
    }

    return (
        <div className="bounty">
            {
                !editToggle ?
                <>
                    <h1>Bounty: {last},{first}</h1>
                    <h2>Bounty is worth {bountyAmount} credits. BEWARE: they are a {type} and considered dangerous</h2>
                    <button onClick={() => setToggle(prevToggle => !prevToggle)}>Edit Bounty</button>
                    <button onClick={() => deleteBounty(_id)}>Delete</button>
                </>

            :

                <>
                    <BountyForm 
                        submit={updateBounty}
                        first={first} 
                        last={last}
                        bountyAmount={bountyAmount} 
                        type={type}
         _              _id={_id}
                    />
                    <button onClick={() => setToggle(prevToggle => !prevToggle)}>Close</button>
                </>

            }
        </div>
    )
}

export default Bounty;
