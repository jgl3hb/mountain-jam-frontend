import { useLocation, Link } from "react-router-dom";
import MountainList from "../MountainList/MountainList";
import CreateComment from "../../components/Comment/Comment";



const MountainDetails = (props) => {
  const location = useLocation()
  const mountain = location.state.mountain
  console.log('props', props)

  return(
    <>
    <main>
      <h1>Mountain details</h1>
      <div className="mountain-dets">
        <p>This is {mountain.name}</p>
        <p>It's located in {mountain.countries[0]} </p>
        {mountain.countries.length > 1? mountain.countries.filter((country, index) => index>0).map(country => <p>It's also located in {country} </p>)
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
      {mountain.comments.length? mountain.comments.map(comments => {
        return(
          <p>{comments.comment}</p>
        )
      })
        : "No comments yet:( Be the first to leave a comment."
      }
        </div>
        <button
        >Add To My Profile</button>
        <CreateComment handleCreateComment={props.handleCreateComment} mountain={mountain}/>
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
    </main>
    </>
  )
}


export default MountainDetails;