import { useLocation, Link} from "react-router-dom";
import CreateComment from "../../components/Comment/Comment";
import { useState } from 'react'



const MountainDetails = (props) => {
  const location = useLocation()
  const mountain = props.mountains.find(m => m._id === location.state.mountain._id)

  const [userProfile, setUserProfile] = useState(props.userProfile[0])
  
  return(
    mountain.name ?
    <>
    <main className="mountain-dets-main">
      <h1 className="h1-country">Mountain details</h1>
      <div className="frame">
        <p>This is {mountain.name}</p>
        <p>It's located in {mountain.countries[0]} </p>
        {mountain.countries.length > 1? mountain.countries.filter((country, index) => index>0).map((country, idx) => <p key={idx}>It's also located in {country} </p>)
        :
        <></>}
        <p>Elevation of this mountain is {mountain.elevation} meters / {Math.round(mountain.elevation*3.28)} feet</p> 
        {mountain.range? 
        <>
          <p>It's part of the {mountain.range} range</p>
        </>
        :
        <p></p>
      }
      <p>Comments:</p>
      {mountain.comments.length? mountain.comments.map((comments, idx) => {
        return(
          <p key={idx}>{comments.comment}</p>
        )
      })
      : <p>"No comments yet:( Be the first to leave a comment."
        </p>
    }
        <br />
        {userProfile.toVisit?.some(profileMountain=> profileMountain._id === mountain._id) ? 
          <p>This mountain is already added to your profile</p>
          :
          <button
          onClick={() => props.addPeakToCollection(mountain)}
          >Add To My Profile</button>
        }
        </div>
        <CreateComment  
        handleCreateComment={props.handleCreateComment} 
        mountain={mountain}/>
        {(userProfile._id === mountain.owner) ?
        <>
          <Link class="create-mtn-btn"
            to='/editmountain'
            state={{mountain}}
            >
            <br />
            <button>
              Edit Mountain
            </button>
          </Link>
          <Link
          class="create-mtn-btn"
            to='/mountains'
            state={{mountain}}
            >
            <br />
            <button
              onClick={()=> props.handleDeleteMountain(mountain._id)}>
                Delete Mountain
            </button>
          </Link>
        </>
        :
        <>
        </>
        }
    </main>
    </>
    :
    <h1>No Mountain</h1>
  )
}

export default MountainDetails;