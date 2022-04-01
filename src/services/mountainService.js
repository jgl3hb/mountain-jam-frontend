import * as tokenService from '../services/tokenService'

const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/mountains`


function create(mountain) {
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

function deleteMountain(id) {
  return fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
  })
  .then(res => res.json())
}

function update(mountain) {
  return fetch(`${BASE_URL}/${mountain.get('_id')}`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: mountain
  })
  .then(res => res.json())
}

function createComment(mountain, comment) {
  return fetch(`${BASE_URL}/${mountain._id}/comment`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: comment
  })
  .then(res => res.json())
}

function search(search) {
  return fetch(`${BASE_URL}/search/${search}`, {
    method: 'GET',
  })
  .then(res => res.json())
}

export { 
  create,
  getAllMountains,
  deleteMountain,
  update,
  createComment,
  search,
}