import { useState, useEffect } from 'react'
import * as mountainService from '../../services/mountainService'
import { Link } from 'react-router-dom'

const MountainList = () => {
  const [mountains, setMountains] = useState([])

  useEffect(()=> {
    mountainService.getAllMountains()
    .then(mountains => setMountains(mountains))
  }, [])
    return (
      <>
      <main>

      <h1>Mountain List</h1>
      <div className='cards'>

      {mountains.length ? 
        <>
          {mountains.map(mountain=>
        <div className='each-card'>
          <Link to="/mountains/mountain">
              <p  key={mountain._id}>{mountain.name}</p>
          </Link>
        </div>
            )}
        </>
        :
        <p>No mountains yet</p>
      }
      </div>

      </main>
      </>
    )

}


export default MountainList;