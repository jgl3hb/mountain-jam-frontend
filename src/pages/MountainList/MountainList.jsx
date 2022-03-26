// import { useState, useEffect } from 'react'
import Mountain from '../../components/Mountain/Mountain'
import { Link } from 'react-router-dom'

const MountainList = ({mountains}) => {
const shortArray = mountains.slice(0, 18)
    return (
      <>
      <main>
      <h1>Mountain List</h1>
      <div className='cards'>
      {mountains.length ? 
        <>
          {shortArray.map(mountain=>
          <Mountain mountain={mountain}/>
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