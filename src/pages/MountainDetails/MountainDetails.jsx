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
    <main>
      <h1>Mountain details</h1>
      <div className="mountain-dets">
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
        : "No comments yet:( Be the first to leave a comment."
      }
        </div>
        {userProfile.toVisit?.some(profileMountain=> profileMountain._id === mountain._id) ? 
          <p>Already Added</p>
        :
          <button onClick={() => props.addPeakToCollection(mountain)}
          >Add To My Profile</button>
        }
        <CreateComment  
        handleCreateComment={props.handleCreateComment} 
        mountain={mountain}/>
        {(userProfile._id === mountain.owner) ?
        <>
          <Link
            to='/editmountain'
            state={{mountain}}
          >
            <br />
            <button>
              Edit Mountain
            </button>
          </Link>
          <Link
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