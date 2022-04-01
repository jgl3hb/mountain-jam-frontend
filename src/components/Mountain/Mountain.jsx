import { Link } from "react-router-dom";


const Mountain = ({mountain}) => {
  return (
    <>
      <div key={mountain._id} className='each-card-top'
      >
      <img className="mountain-pic"
        src={mountain.photo ? mountain.photo : `https://picsum.photos/id/1018/200/150`} 
        // className="card-img-top" 
        alt='mountain'
      />
        <Link state={{mountain}} to="/mountain">
          <p className="mntn-name">{mountain.name}</p>
        </Link>
      </div>
    </>
  )
}

export default Mountain;