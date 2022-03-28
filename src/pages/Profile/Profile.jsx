import { Link } from "react-router-dom";
import MyProfile from "../../components/MyProfile/MyProfile";

const ProfileDetails = (props) => {
  console.log('profile',props.profile._id)
  console.log('user',props.user.profile)
  return (
    <>
    <main>
      <h1>Profile Details</h1>
      <p>This is {props.profile.name}'s page</p>
      {props.profile._id === props.user.profile ? 
      <>
        <MyProfile />
      </>
      :
      <>
      </>
      }
      
    </main>
    </>
  )
}

export default ProfileDetails;