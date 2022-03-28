import { Link } from "react-router-dom";
import MyProfile from "../../components/MyProfile/MyProfile";

const ProfileDetails = (props) => {
  console.log('user', props)
  return (
    <>
    <main>
      <h1>Profile Details</h1>
        {!props.userProfile ? 
        <>
          <p>This is {props.profile.name}'s page</p>
          {props.profile._id === props.user.profile ? 
            <MyProfile />
          :
          <></>
          }
      </>
      :
      <>
        <MyProfile />
      </>
        }
    </main>
    </>
  )
}

export default ProfileDetails;