import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'

const Profiles = () => {
  const [profiles, setProfiles] = useState([])

  useEffect(()=> {
    profileService.getAllProfiles()
    .then(profiles => setProfiles(profiles))
  }, [])

  return (
    <>
    <main>
      <div class='main-center'>
        <h1>Hello. This is a list of all the profiles.</h1>
        {profiles.length ? 
          <>
            {profiles.map(profile=>
              <p key={profile._id}>{profile.name}</p>
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