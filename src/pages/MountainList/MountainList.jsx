import { useState, useEffect } from 'react'
import * as mountainService from '../../services/mountainService'

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
            <p className='each-card' key={mountain._id}>{mountain.name}</p>
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