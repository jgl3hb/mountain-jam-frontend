import { Link } from "react-router-dom";

const MyProfile = (props) => {
  return (
    <>
      <Link
        to='/addmountain'
      >
        <button>
          Create a New Mountain
        </button>
      </Link>
    </>
  )
}

export default MyProfile;

