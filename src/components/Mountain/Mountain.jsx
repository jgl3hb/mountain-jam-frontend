import userEvent from "@testing-library/user-event";


const Mountain = (props) => {
  
  console.log("props", props)
  return (
    <>
    <main>
      <h1>Mountain Details</h1>
      <p>This is Mountain {props.mountain.name} page</p>
    </main>
    </>
  )
}

export default Mountain;