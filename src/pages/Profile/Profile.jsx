import { Link } from "react-router-dom";
import MyProfile from "../../components/MyProfile/MyProfile";
import Mountain from "../../components/Mountain/Mountain";

const ProfileDetails = (props) => {
  const toVisit = props.profile.toVisit
  return (
    <>
    <main>
      <h1>Profile Details!!!</h1>
        {!props.userProfile ? 
        <>
          <p>This is {props.profile.name}'s page</p>
          <div>My Mountains</div>
          <div className='cards'>
            {toVisit.length ? 
          <>
            {toVisit.map(mountain=>
              <Mountain 
              key={mountain._id}
              mountain={mountain}
              handleDeleteMountain={props.handleDeleteMountain}
              user={props.user}/>
            )}
        
        </>
        :
        <p>No mountains yet</p>
      }
      </div>

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