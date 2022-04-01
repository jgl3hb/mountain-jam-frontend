import { Link } from "react-router-dom";

const MyProfile = (props) => {
  return (
    <>
    <div className='change-pass'>
      <Link className="create-mtn-btn"
        to='/addmountain'
      >
          Create a New Mountain
      </Link>
      </div>
    </>
  )
}

export default MyProfile;

