import { Link } from "react-router-dom";

const MyProfile = (props) => {
  return (
    <>
    <main>
      <h1>Profile Details</h1>
      <p>This is {props.user.name}'s page</p>
      <Link
        to='/addmountain'
      >
        <button>
          Add Mountain
        </button>
      </Link>
    </main>
    </>
  )
}

export default MyProfile;