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

    <p key={profile._id} onClick={()=> props.handleClick(profile)}>
    <Link to="/profile">Hello! {profile.name}</Link></p>
    )
  }
  )
  return (
    <>
    <main>
      <div className='main-center'>
        <h1>Hello. This is a list of all the profiles.</h1>
        {profiles.length ? 
          <>
          {profIdx}
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