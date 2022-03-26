import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'
import { Link } from 'react-router-dom'

const Profiles = () => {
  const [profiles, setProfiles] = useState([])

  useEffect(()=> {
    profileService.getAllProfiles()
    .then(profiles => setProfiles(profiles))
  }, [])

  return (
    <>
    <main>
      <div className='main-center'>
        <h1>Hello. This is a list of all the profiles.</h1>
        {profiles.length ? 
          <>
            {profiles.map(profile=>
              <p key={profile._id}>
              <Link to="/profile">{profile.name}</Link></p>
            )}
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