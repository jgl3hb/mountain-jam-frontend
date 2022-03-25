import userEvent from "@testing-library/user-event";


const ProfileDetails = (props) => {
  console.log("propssssss",  props);
  return (
    <>
      <h1>Profile Details</h1>
      <p>This is {props.user.name}'s page</p>
      
    </>
  )
}

export default ProfileDetails;