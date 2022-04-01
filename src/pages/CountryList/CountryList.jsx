import Country from '../../components/Country/Country'
import { Link } from 'react-router-dom'
import CountryDetails from '../CountryDetails/CountryDetails'

const CountryList = (props) => {
const countries = props.countries 

  return (
    <>
    <main>
    <h1>Country List</h1>
    <div  className='cards'>
    {countries.length ? 
      <>
        {countries.map(country=>
          <Country 
          key={country._id}
          country={country}
          user={props.user}/>
        )}
      </>
      :
      <p>No countries</p>
    }
    </div>
    </main>
    </>
  )
}


export default CountryList;