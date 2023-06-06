
import React, { useState , useEffect } from 'react'
import jobListings from './Data'
import Joblisting from './Joblisting'
import Navbar from './Navbar'
import './Home.css'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Home = () => {
      const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('');
  
  // Set the initial state with default jobs
  const initialJobs = jobListings;

  // Filter and sort the job listings based on search and sort options
  const filteredAndSortedJobs = initialJobs
    .filter((job) => job.title.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      if (sortOption === 'Newest') {
        return new Date(b.postDateTime) - new Date(a.postDateTime);
      } else if (sortOption === 'Salary') {
        return parseFloat(b.salary.split('-')[0]) - parseFloat(a.salary.split('-')[0]);
      } else if (sortOption === 'Experience') {
        return parseFloat(b.experience.split('-')[0]) - parseFloat(a.experience.split('-')[0]);
      }
      return 0;
    });
 
 return (
   <div>
      <Navbar />
      {/* <h1>Job Listing</h1> */}
      <div className="container">
        <div className="filters">
      
          <input
            type="text"
            placeholder="Search Job here......."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="inputField"

          />
          

          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="selectField"
          >
            <option value="">Sort By</option>
            <option value="Newest">Newest</option>
            <option value="Salary">Salary</option>
            <option value="Experience">Experience</option>
          </select>
        </div> 
        <div className="Jobdata">
          {filteredAndSortedJobs.map((job) => (
            <Joblisting key={job.id} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
  
}

export default Home