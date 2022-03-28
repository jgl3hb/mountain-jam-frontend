import { useLocation, Link } from "react-router-dom";
import MountainList from "../MountainList/MountainList";


const MountainDetails = () => {
  const location = useLocation()
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
    </main>
    </>
  )
}






export default MountainDetails;