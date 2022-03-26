import { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'

const MountainList = ({mountains}) => {

    return (
      <>
      <main>
      <h1>Mountain List</h1>
      <div className='cards'>
      {mountains.length ? 
        <>
          {mountains.map(mountain=>
        <div className='each-card'>
          <Link to="/mountain">
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