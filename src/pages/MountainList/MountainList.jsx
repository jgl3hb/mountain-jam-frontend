// import { useState, useEffect } from 'react'
import Mountain from '../../components/Mountain/Mountain'
import { Link } from 'react-router-dom'
import MountainDetails from '../MountainDetails/MountainDetails'
import { useState, useEffect } from 'react'

const MountainList = (props) => {
// const mountains = props.mountains  
const [mountains, setMountains] = useState([])

useEffect(() => {
  console.log('mountainMapping')
  // mountains.map(mountain=>
    // <Mountain 
    // key={mountain._id}
    // mountain={mountain}
    // handleDeleteMountain={props.handleDeleteMountain}
    // user={props.user}/>
    // )
  }, [mountains])
  
  useEffect (() => {
    setMountains(props.mountains)
  }, [])
  

    return (
      <>
      <main>
      <h1>Mountain List</h1>
      <div className='cards'>
      {mountains.length ? 
        <>
          {mountains.map(mountain=>
            <Mountain 
            key={mountain._id}
            mountain={mountain}
            handleDeleteMountain={props.handleDeleteMountain}
            user={props.user}/>
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