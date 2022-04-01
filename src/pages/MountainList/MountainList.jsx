import Mountain from '../../components/Mountain/Mountain'
import { useState, useEffect } from 'react'

const MountainList = (props) => {
const [mountains, setMountains] = useState([])
const [search, setSearch] = useState({query: ''})
const [searchResults, setSearchResults] = useState([])

useEffect(()=> {
  const results = mountains.filter(mountain => mountain.name.toLowerCase().includes(search.query))
  setSearchResults(results)
}, [search])

  const handleSearch = evt => {
    setSearch({...search, [evt.target.name]: evt.target.value.toLowerCase()})
  }
  
  const handleSubmitSearch = evt => {
    evt.preventDefault()
    props.handleSubmitSearch()
  }

  useEffect (() => {
    setMountains(props.mountains)
  }, [])
  
    return (
      <>
      <main className='mountains-main'>
      <h1 className="h1-country">Mountain List</h1>
      <form className='search' onSubmit={handleSubmitSearch}>
        <input
        className='search' 
        onChange={handleSearch} 
        value={search.query}
        name="query"
        type="search"
        placeholder='Name of the mountain ...'
        aria-label='search'
        />
      </form>
      <div className='cards'>
      {search.query ? 
        <>
          {searchResults.map(mountain =>
            <Mountain 
            key={mountain._id}
            mountain={mountain}
            handleDeleteMountain={props.handleDeleteMountain}
            user={props.user}/>
          )}
        </>
        :
        <>
          {mountains.slice(0, 18).map(mountain=>
            <Mountain 
            key={mountain._id}
            mountain={mountain}
            handleDeleteMountain={props.handleDeleteMountain}
            user={props.user}/>
          )}

        </>
      }
      </div>
      </main>
      </>
    )

}

export default MountainList;