import React, { useContext, useState } from 'react'
import { leadContext } from '../../../context/LeadContext'

const LeadProfile = (props) => {
    const { lead } = props
    
    console.log(lead)
    const leadcontext = useContext(leadContext)
    const [accepted, setaccepted] = useState(false)
    const [rejected, setrejected] = useState(false)
    const { updateleadstage } = leadcontext
    const usertype = JSON.parse(localStorage.getItem('userDetail')).user.usertype
    return (
        <div>
            <div>
                <p> <b>Client Name : </b> {lead.name}</p>
                {lead.hasOwnProperty('phone') ? <p> <b>Phone No. : </b> { usertype == "2" ? lead.phone : lead.property_lead_owner_id ==lead.property_lead_handler_id ?   lead.phone:lead.phone.slice(0,6)+"****"}</p> : <p> <b>Phone No. : </b> Not Update TIll Now</p>}
                {lead.property_lead_stage === (0) ? <button className='btn btn-dark disabled py-2'>Lead</button> : lead.property_lead_stage === (10) ?
                    <><button className="btn btn-dark py-2" onClick={() => { updateleadstage(lead._id, 20); setaccepted(true) }} disabled={usertype=="2"}>{accepted ? "Payment Pending" : "Accept"}</button>  <span></span> <button className="btn btn-dark  py-2" onClick={() => { updateleadstage(lead._id, -10); setrejected(true) }} disabled={usertype=="2"}>{rejected ? "Rejected" : "Reject"}</button></>
                    : lead.property_lead_stage === (20) ? <button className="btn btn-dark disabled m-2">Pending Payment</button> : lead.property_lead_stage === (30) ? <button className="btn btn-dark disabled py-2">Completed</button> : <button className="btn btn-dark disabled py-2" disabled={usertype=="2"}>Rejected</button>}
                <hr />
            </div>
        </div>
    )
}

export default LeadProfile