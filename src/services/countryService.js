const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/countries`

async function getAllCountries() {
  const res = await fetch(`${BASE_URL}`)
  return await res.json()
}

export {
  getAllCountries,
}