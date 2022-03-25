import userEvent from "@testing-library/user-event";


const ProfileDetails = (props) => {
  return (
    <>
    <main>
      <h1>Profile Details</h1>
      <p>This is {props.user.name}'s page</p>
    </main>
    </>
  )
}

export default ProfileDetails;