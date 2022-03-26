// import * as tokenService from '../services/tokenService'

const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/mountains`

async function getAllMountains() {
  const res = await fetch(BASE_URL)
  return await res.json()
}



export { getAllMountains }