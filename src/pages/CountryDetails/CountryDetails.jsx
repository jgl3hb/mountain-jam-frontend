import { useLocation } from "react-router-dom";
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
      <main className="mountain-dets country-main">
      <div className="frame"> 
        <h1 className="h1-country">Country details</h1>
        <div>
          <p className="any-p-tag">This is {country.name}</p>
          <img className="country-dets-img" src={country.flag} alt="" />
          <p className="any-p-tag">Capital: {country.capital} </p>
          <p className="any-p-tag">Region: {country.region} </p>
        <h1>Mountains:</h1>
        </div>
        {mountains.length ?
        <div className="country-dets">
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
        </div>
      </main>
    </>
  )
}

export default CountryDetails;