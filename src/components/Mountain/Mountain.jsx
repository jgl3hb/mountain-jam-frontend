import userEvent from "@testing-library/user-event";
import { Link } from "react-router-dom";


const Mountain = ({mountain}) => {
  // console.log("props", mountain)
  return (
    <>
      <div key={mountain._id} className='each-card-top'
      >
      <img 
        src={mountain.photo ? mountain.photo : `https://picsum.photos/id/1018/200/150`} 
        className="card-img-top" 
        alt='mountain'
      />
        <Link state={{mountain}} to="/mountain">
          <p >{mountain.name}</p>
        </Link>
      </div>
    </>
  )
}

export default Mountain;