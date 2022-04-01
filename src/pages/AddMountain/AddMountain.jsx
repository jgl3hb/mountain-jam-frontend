import { useState, useRef, useEffect } from "react"

function AddMountain(props) {
  const formElement = useRef()
  const [validForm, setValidForm] = useState (false)
  const [formData, setFormData] = useState({
    name: '',
    elevation: 0,
    countries: [],
  })

  useEffect(()=> {
    formElement.current.checkValidity()?
    setValidForm(true) : setValidForm(false)
  }, [formData])

  const handleChange = evt => {
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }

  const handleSubmit = evt => {
    evt.preventDefault()
		const mountainFormData = new FormData()
		mountainFormData.append('photo', formData.photo)
    mountainFormData.append('name', formData.name)
    mountainFormData.append('elevation', formData.elevation)
    mountainFormData.append('countries', formData.countries)
    props.handleAddMountain(mountainFormData)
  }

	const handleChangePhoto = evt => {
		setFormData({...formData, photo: evt.target.files[0]})
	}

  return (
    <>
      <main className="add-mountain mountain-dets country-main">
        <h1 className="h1-country">Add mountain</h1>
        <form 
        className="frame" 
        autoComplete="off" 
        ref={formElement} 
        onSubmit={handleSubmit}>
        <div>
        <label htmlFor="name-input">
					Mountain's Name (required)
				</label>
        <br />
        <input 
        className="input"
          type="text"
          id="name-input"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
				/>
        </div>
        <br />
        <div>
        <label htmlFor="elevation-input">
					Mountain's Elevation (required)
				</label>
        <br />
        <input 
        className="input"
          type="number"
          id="elevation-input"
          name="elevation"
          value={formData.elevation}
          onChange={handleChange}
          required
        />
        </div>
        <br />
        <div>
        <label htmlFor="countries-input">
          Country (required)
				</label>
        <br />
        <input 
        className="input"
          type="text"
          id="countries-input"
          name="countries"
          value={formData.countries}
          onChange={handleChange}
          required
        />
        </div>
        <div className="form-group mb-4">
					<label htmlFor="photo-upload" className="form-label">
						Upload Photo
					</label>
          <br />
					<input
          className="input"
						type="file"
						// className="form-control"
						id="photo-upload"
						name="photo"
						onChange={handleChangePhoto}
					/>
				</div>
        <br />
					<button
						type="submit"
						className="create-mtn-btn"
            disabled={!validForm}
					>
						Add Mountain
					</button>
        </form>
      </main>
    </>
  )
}

export default AddMountain