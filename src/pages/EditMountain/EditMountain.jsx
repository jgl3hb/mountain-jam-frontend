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




}


















export default EditMountain