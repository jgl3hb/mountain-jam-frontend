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
        // <div key={mountain._id} className='each-card'>
        //   <Link to="/mountain">
        //       <p  >{mountain.name}</p>
        //   </Link>
        // </div>
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