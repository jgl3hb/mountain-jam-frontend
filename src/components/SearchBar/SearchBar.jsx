import { useState } from 'react'

const SearchBar = props => {
  const [formData, setFormData] = useState({
    searchString: '',
  })


  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await props.searchMountain(formData.searchString)
    } catch (err) {
      console.log(err.message)
    }
  }

  const { searchString } = formData

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          autoComplete="off"
          id="searchString"
          value={searchString}
          name="searchString"
          onChange={handleChange}
        />
      </div>
      <div>
        <button>
          Search
        </button>
      </div>
    </form>
  )
}

export default SearchBar
