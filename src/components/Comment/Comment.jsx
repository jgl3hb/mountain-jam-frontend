import { useState, useRef, useEffect } from "react"

function CreateComment(props) {
  const [formData, setFormData] = useState('')
  const [validForm, setValidForm] = useState(true)
  const formElement = useRef()

  const handleChange = evt => {
    setFormData({...formData, [evt.target.name]: evt.target.value })
  }

  useEffect(() => {
		formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
	}, [formData])

	const handleSubmit = evt => {
    const mountain=props.mountain
		evt.preventDefault()
		const commentFormData = new FormData()
		commentFormData.append('photo', formData.photo)
		commentFormData.append('visitDate', formData.date)
		commentFormData.append('comment', formData.comment)
		props.handleCreateComment(mountain, commentFormData)
    setFormData('')
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
            <label htmlFor="user-comments">Share your expreience here:</label>
          <br />
            <textarea 
            name="comment" 
            id="user-comments"
            onChange={handleChange}
            required
            ></textarea>
          <br />
            <label htmlFor="date">Date of your visit:</label>
            <br />
            <input 
            type='date'
            id='date-input'
            name='date'
            onChange={handleChange}
            />
          <br />
            <button 
            className="add-comment" 
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