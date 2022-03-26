import { useLocation } from "react-router-dom";
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
    </main>
    </>
  )
}

export default MountainDetails;