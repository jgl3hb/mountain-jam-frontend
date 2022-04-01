import Country from '../../components/Country/Country'

const CountryList = (props) => {
const countries = props.countries 

  return (
    <>
    <main className='countries-main'>
    <h1 className='country-list'>Country List</h1>
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