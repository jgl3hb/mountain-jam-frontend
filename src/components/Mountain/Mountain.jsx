import { Link } from "react-router-dom";


const Mountain = ({mountain}) => {
  return (
    <>
      <div 
      style={{  
        backgroundImage: `url(${mountain.photo? mountain.photo : `https://picsum.photos/id/1018/200/150`})`}
      }
      key={mountain._id} className='each-card-top'
      >
        <Link state={{mountain}} to="/mountain">
          <p className="mntn-name">{mountain.name}</p>
        </Link>
      </div>
    </>
  )
}

export default Mountain;