import React from 'react'
import {useParams} from "react-router-dom";
import jobListings from './Data';
import Navbar from "./Navbar"
import './JobdetailPage.css'
import './Joblisting.css'
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import WorkHistoryOutlinedIcon from '@mui/icons-material/WorkHistoryOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import { Button } from '@mui/base';

const JobdetailPage = () =>  {
const {id} = useParams() ;
const job = jobListings.find((job) => job.id == parseInt(id));

if(!job){
    return (
        <div>
            <h1>Job not found !</h1>
        </div>
    )
}
  return (
<div className='ParentOFJobdeatail'>
   <Navbar/>

  <div className='first_para_detailJob'>
    <h2>{job.title}</h2>
    <p className='company_name'>{job.companyName}</p>
    <p className='icon_with'><CurrencyRupeeOutlinedIcon className='icon' fontSize='14px' /> {job.salary}</p>
    <p className='icon_with'><PlaceOutlinedIcon className='icon' fontSize='14px'/>{job.location}</p>
    <p className='icon_with'> <WorkHistoryOutlinedIcon className='icon' fontSize='14px'/>{job.experience}</p>
   </div>

   
   
 <div className='second_para_deatialJob'>
    <h3>Job description -</h3>
    <p>{job.description}</p>
    <h3>Duration</h3>
    <p>{job.duration}</p>
    <p>{job.skills}</p>
    <h4> Requirements</h4>
    <p>{job.requirements}</p>
    <p>{job.role}</p>
    <p>{job.industryType}</p>
    <p>{job.roleCategory}</p>
    <p>{job.education}</p>
    <p>{job.roleCategory}</p>
    <p>{job.keySkills}</p>
    <p>{job.employmentType}</p>
    
    <h3>Applicants</h3>
    <p>{job.applicants}</p>
    <div className='date-parent'>
    <button className='btn'>Apply now</button>
<p className='date'> Posted - {job.postDateTime}</p>
 
    </div>
    
 </div>
    

</div>

   
  )
}

export default JobdetailPage