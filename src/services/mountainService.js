import * as tokenService from '../services/tokenService'

const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/mountains`


function create(mountain) {
  console.log('mountain', mountain)
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: mountain
  })
  .then(res => res.json())
}

async function getAllMountains() {
  const res = await fetch(BASE_URL)
  return await res.json()
}

export { 
  create,
  getAllMountains 
}