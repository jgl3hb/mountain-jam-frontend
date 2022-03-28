import { useState, useRef, useEffect } from "react"
import { Link, useLocation } from 'react-router-dom'

function EditMountain(props) {
  const location = useLocation()
  const [formData, setFormData] = useState(location.state.mountain)
  const [validForm, setValidForm] = useState(true)
  const formElement = useRef()

  const handleChange = evt => {
    setFormData({...formData, [evt.target.name]: evt.target.value })
  }

  useEffect(() => {
		formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
	}, [formData])

	const handleSubmit = evt => {
		evt.preventDefault()
		const mountainFormData = new FormData()
		mountainFormData.append('photo', formData.photo)
		mountainFormData.append('name', formData.name)
		mountainFormData.append('elevation', formData.elevation)
		mountainFormData.append('countries', formData.countries)
		mountainFormData.append('_id', formData._id) 
		props.handleUpdateMountain(mountainFormData)
	}

	const handleChangePhoto = (evt) => {
		setFormData({...formData, photo: evt.target.files[0]})
	}

  return (
    <>
      <h1>Edit Mountain</h1>
			<form autoComplete="off" ref={formElement} onSubmit={handleSubmit}>
				<div className="form-group mb-3">
					<label htmlFor="name-input" className="form-label">
						Mountain's Name (required)
					</label>
					<input 
						type="text"
						className="form-control"
						id="name-input"
						name="name"
            value={formData.name}
            onChange={handleChange}
						required
					/>
				</div>
    		<div className="form-group mb-3">
					<label htmlFor="countries-input" className="form-label">
						Mountain's Country (required)
					</label>
					<input 
						type="text"
						className="form-control"
						id="countries-input"
						name="countries"
            value={formData.countries}
            onChange={handleChange}
						required
					/>
				</div>
				<div className="form-group mb-4">
					<label htmlFor="elevation-input" className="form-label">
						Mountain's Elevation
					</label>
					<input 
						type="number"
						className="form-control"
						id="elevation-input"
						name="elevation"
            value={formData.elevation}
            onChange={handleChange}
					/>
				</div>
				<div className="form-group mb-4">
					<label htmlFor="photo-upload" className="form-label">
						Upload Photo
					</label>
					<input
						type="file"
						className="form-control"
						id="photo-upload"
						name="photo"
						onChange={handleChangePhoto}
					/>
				</div>
				<div className="d-grid mb-3">
					<button
						type="submit"
						className="btn btn-primary btn-fluid"
            disabled={!validForm}
					>
						Save Mountain
					</button>
				</div>
        <div className="d-grid">
					<Link
						to="/"
						className="btn btn-danger btn-fluid"
					>
						Cancel
					</Link>
				</div>
			</form>
    </>
  )
}

export default EditMountain