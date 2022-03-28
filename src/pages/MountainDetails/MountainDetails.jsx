import { useLocation, Link } from "react-router-dom";
import MountainList from "../MountainList/MountainList";



const MountainDetails = (props) => {
  const location = useLocation()
  // const handleDeleteMountain = props.handleDeleteMountain
  // console.log("location", location.state);
  const mountain = location.state.mountain

  return(
    <>
    <main>
      <h1>Mountain details</h1>
      <div className="mountain-dets">
        This is mountain {mountain.name}.
        <br />
        Elevation of this mountain is {mountain.elevation} meters. It's part of {mountain.range} range.
        </div>
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