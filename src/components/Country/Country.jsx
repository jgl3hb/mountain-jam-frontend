import userEvent from "@testing-library/user-event";
import { Link } from "react-router-dom";


const Country = ({country}) => {
  return (
    <>
      <div key={country._id} className='each-card'>
        <Link state={{country}} to="/country">
          <p>{country.name}</p>
        </Link>
      </div>
    </>
  )
}

export default Country;