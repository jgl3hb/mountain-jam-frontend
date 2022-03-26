import userEvent from "@testing-library/user-event";


const MountainDetails = (props) => {
  return (
    <>
    <main>
      <h1>Mountain Details</h1>
      <p>This is {props.mountain.name}'s page</p>
    </main>
    </>
  )
}

export default MountainDetails;