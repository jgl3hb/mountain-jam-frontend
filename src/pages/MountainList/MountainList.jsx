import { useState, useEffect } from 'react'
import * as mountainService from '../../services/mountainService'

const Mountains = () => {
  const [mountains, setMountains] = useState([])

  useEffect(()=> {
    mountainService.getAllMountains()
    .then(mountains => setMountains(mountains))
  }, [])

}

const MountainList = (props) => {
  return (
    <>
      <h1>Mountain List</h1>

    </>
  )
}

export default MountainList;