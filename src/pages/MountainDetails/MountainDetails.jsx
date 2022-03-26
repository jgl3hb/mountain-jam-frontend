import { useLocation } from "react-router-dom";

const MountainDetails = () => {
  const location = useLocation()
  console.log("location", location.state);
  const mountain = location.state.mountain

  return(
    <>
    <main>
      <h1>Hellooo!!!!</h1>
      <div>
        This {mountain.name}
        </div>
    </main>
    </>
  )
}

export default MountainDetails;