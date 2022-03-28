import { Link } from "react-router-dom";

const MyProfile = (props) => {
  return (
    <>
      <Link
        to='/addmountain'
      >
        <button>
          Add Mountain
        </button>
      </Link>
    </>
  )
}

export default MyProfile;

