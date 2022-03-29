import { useState, useRef, useEffect } from "react"
import { Link, useLocation } from 'react-router-dom'

function CreateComment(props) {
  const location = useLocation()
  const [formData, setFormData] = useState(location.state.comment)
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
		const commentFormData = new FormData()
		commentFormData.append('photo', formData.photo)
		commentFormData.append('visitDate', formData.date)
		commentFormData.append('comment', formData.comment)
		props.handleCreateComment(commentFormData)
	}

	const handleChangePhoto = (evt) => {
		setFormData({...formData, photo: evt.target.files[0]})
	}

  return (
    <>
      <main>
        <h3>Add Comment</h3>
        <form id="add-comment"
          onSubmit={handleSubmit}
          ref={formElement}
          autoComplete="off"
          method="POST">
            <label for="user-comments">Share your expreience here:</label>
          <br />
            <textarea 
            name="comment" 
            id="user-comments"
            onChange={handleChange}
            required
            ></textarea>
          <br />
            <input 
            type='date'
            id='date-input'
            name='date'
            onChange={handleChange}
            />
          <br />
            <button 
            class="add-comment" 
            type="submit"
            disabled={!validForm}
            >Add Comment
            </button>
        </form>
      </main>
    </>
  )
}

export default CreateComment