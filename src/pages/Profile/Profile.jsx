import { Link } from "react-router-dom";

const ProfileDetails = (props) => {
  return (
    <>
    <main>
      <h1>Profile Details</h1>
      <p>This is {props.profile.name}'s page</p>
      
      
    </main>
    </>
  )
}

export default ProfileDetails;