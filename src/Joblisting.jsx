
import React from 'react'
import { Link } from 'react-router-dom'
import './Joblisting.css'
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import WorkHistoryOutlinedIcon from '@mui/icons-material/WorkHistoryOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
const Joblisting = ({job}) => {
 function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "......" : str;
  }

  return (
    <div className='Job-listing-home'>
    
<div>


   
        <h2 className='Jobtitle'>{job.title}</h2>
         <p className='company_name'>{job.companyName} </p>
         {/* <EventNoteOutlinedIcon className='icon'/> */}
        <p className='icon_with'>{truncate(job.description , 80)}</p>
       <p className='icon_with'><CurrencyRupeeOutlinedIcon className='icon' fontSize='14px'/>   {job.salary}</p>
      <p className='icon_with'>  <WorkHistoryOutlinedIcon className='icon' fontSize='14px'/> {job.experience}</p>
        <p className='icon_with'><PlaceOutlinedIcon className='icon' fontSize='14px'/> {job.location}</p>
       
        <Link to={`/job/${job.id}`} className="Detail_btn">View Detail</Link>
 </div>
    </div>
  )
}

export default Joblisting