import { useLocation, Link } from "react-router-dom";
import { useState, useEffect } from 'react'
import Mountain from "../../components/Mountain/Mountain";

const CountryDetails = (props) => {
  const location = useLocation()
  const country = location.state.country
  const [mountains, setMountains] = useState([])
  
  useEffect (() => {
    if (country) {
    setMountains(props.mountains.filter(mountain => mountain.countries?.includes(country.name)))}
  }, [])

  return(
    <>
      <main>
        <h1>Country details</h1>
        <div className="mountain-dets">
          <p>This is {country.name}</p>
          <img className="country-dets-img" src={country.flag} alt="" />
          <p>Capital: {country.capital} </p>
          <p>Region: {country.region} </p>
        </div>
        {mountains.length ?
        <div>
          <h1>Mountains:</h1>
          {mountains.map(mountain =>
            <Mountain 
            key={mountain._id}
            mountain={mountain}
            handleDeleteMountain={props.handleDeleteMountain}
            user={props.user}/>
          )}
        </div>
        :
        <div>
          <h1>No Mountain Data</h1>
        </div>
        }
      </main>
    </>
  )
}

export default CountryDetails;