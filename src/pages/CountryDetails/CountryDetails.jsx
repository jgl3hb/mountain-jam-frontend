import { useLocation, Link } from "react-router-dom";

const CountryDetails = (props) => {
  const location = useLocation()
  const country = location.state.country

  

  return(
    <>
      <main>
        <h1>Country details</h1>
        <div className="mountain-dets">
          <p>This is {country.name}</p>
          <img className="country-dets-img" src={country.flag} alt="" />
          <p>It's capital is {country.capital} </p>
        </div>
      </main>
    </>
  )
}


export default CountryDetails;