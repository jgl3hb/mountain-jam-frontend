import userEvent from "@testing-library/user-event";
import { Link } from "react-router-dom";


const Mountain = ({mountain}) => {
  return (
    <>
      <div key={mountain._id} className='each-card'>
        <Link state={{mountain}} to="/mountain">
          <p>{mountain.name}</p>
        </Link>
      </div>
    </>
  )
}

export default Mountain;