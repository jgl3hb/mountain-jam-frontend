import userEvent from "@testing-library/user-event";
import { Link } from "react-router-dom";


const Country = ({country}) => {
  return (
    <>
      <div
      style={{  
        backgroundImage: `url(${country.flag})`}
      }
      key={country._id} className='each-card country'>
        <Link className="flag-text" state={{country}} to="/country">
          <p className="p-flag">{country.name}</p>
        </Link>
      </div>
    </>
  )
}

export default Country;