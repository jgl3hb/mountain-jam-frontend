// import { useState, useEffect } from 'react'
import Mountain from '../../components/Mountain/Mountain'
import { Link } from 'react-router-dom'
import MountainDetails from '../MountainDetails/MountainDetails'

const MountainList = (props) => {
const mountains = props.mountains  
const shortArray = mountains.slice(0, 18)

    return (
      <>
      <main>
      <h1>Mountain List</h1>
      <div className='cards'>
      {mountains.length ? 
        <>
          {shortArray.map(mountain=>
          <Mountain mountain={mountain}
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