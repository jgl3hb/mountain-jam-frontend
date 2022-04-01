import { Link } from "react-router-dom";
import MyProfile from "../../components/MyProfile/MyProfile";
import Mountain from "../../components/Mountain/Mountain";

const ProfileDetails = (props) => {
  const toVisit = props.profile.toVisit
  const visit = props.profile.visit
  return (
    <>
    <main>
    <h1>Profile Details</h1>
    {props.userProfile ? 
      <>
      <div className="any-text">Hey {props.userProfile[0].name},</div>
      <div className="any-text">These are the mountains that you havent visited yet: </div>
      <div className='profile-cards'>
            {props.userProfile[0].toVisit?.length? 
          <>
            {props.userProfile[0].toVisit.map(mountain=>
              <Mountain 
              key={mountain._id}
              mountain={mountain}
              handleDeleteMountain={props.handleDeleteMountain}
              user={props.user}/>
            )}
        
          </>
          :
          <p className="any-p-tag">No mountains yet</p>
          }
          </div>
          <div className="any-text">Mountains that you've been at:</div>
          <div className='profile-cards'>
            {visit?.length? 
          <>
            {visit.map(mountain=>
              <Mountain 
              key={mountain._id}
              mountain={mountain}
              handleDeleteMountain={props.handleDeleteMountain}
              user={props.user}/>
            )}
        
          </>
          :
          <p className="any-p-tag">I haven't visited any mountains yet :(</p>
          }
          </div>
          {props.userProfile[0]._id === props.user.profile ? 
            <>
            <MyProfile />
            <div className='change-pass'><Link id="passw" to="/changePassword">Change Password</Link></div>
            </>
            :
            <></>
          }
      </>
      :
      <>
      {props.profile._id === props.user.profile ? 
        <>
          My Page
          <div className="any-text">These are the mountains that I havent visited yet: </div>
        </>
          :
        <>
          <p className="any-p-tag">Hey, {props.user.name} 
            <br /> 
            Welcome to my page!
          </p> 
          <p className="any-p-tag"> My name is {props.profile.name}
          </p>
          <div className="any-text">I want to visit these mountains:</div>
        </>
      }

      <div className='profile-cards'>
            {toVisit?.length? 
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
          <p className="any-p-tag">No mountains yet</p>
          }
      </div>

          <div className="any-text">Mountains that I've been at:</div>
          <div className='profile-cards'>
            {visit?.length? 
          <>
            {visit.map(mountain=>
              <Mountain 
              key={mountain._id}
              mountain={mountain}
              handleDeleteMountain={props.handleDeleteMountain}
              user={props.user}/>
            )}
          </>
          :
          <p className="any-text">I haven't visited any mountains yet :(</p>
          }
          </div>

          {props.profile._id === props.user.profile ? 
            <>
            <MyProfile />
            <div className='change-pass'><Link id="passw" to="/changePassword">Change Password</Link></div>
            </>
            :
            <></>
          }
      </>
    }
    </main>
    </>
  )
}

export default ProfileDetails;