import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'
import { Link } from 'react-router-dom'

const Profiles = (props) => {
  const [profiles, setProfiles] = useState([])

  useEffect(()=> {
    profileService.getAllProfiles()
    .then(profiles => setProfiles(profiles))
  }, [])



  let profIdx = profiles.map((profile,idx) =>{
    return(
      <div className='user-card'>
    <p key={profile._id} onClick={()=> props.handleClick(profile)}>
    <Link to="/profile">Hello! {profile.name}</Link></p>
    </div>
    )
  }
  )
  return (
    <>
    <main>
      <div className='main-center'>
        <h1 className='h1'>All users</h1>
        {profiles.length ? 
          <>
          <div className='cards'>
          {profIdx}
          </div>
          </>
        :
          <p>No profiles yet</p>
        }
      </div>
    </main>
    </>
  )
}

export default Profiles