import { Link } from 'react-router-dom'

const NavBar = ({ user, profile, handleLogout, handleClick }) => {
  return (
    <>
      {user ?
      <header>
          <nav className='nav-bar'>
            <div id='left-nav'>
              <li id='welcome'>Welcome, {user.name}</li>
              <li className='nav-links'><Link to='/mountains'>All Mountains</Link>
              </li>
              <li className='nav-links'><Link to='/countries'>Countries</Link> </li>
            </div>
            <div>
              <Link to="/">
                <img id='jam-logo' src="../Logo test-modified1.png" alt="" />
              </Link>
            </div>
            <div className='nav-right'>
              <li className='nav-links' onClick={()=> handleClick(profile, user)}><Link to="/myprofile" profile={profile} user={user}>My Profile</Link></li>
              <li className='nav-links'><Link to="/profiles">Profiles</Link></li>
              <li className='nav-links'><Link to="" onClick={handleLogout}>LOG OUT</Link></li>
            </div>
          </nav>
          </header>
        :
        <header>
          <nav className='nav-bar'>
            <ul>
              <li className='nav-links'><Link to="/login">Log In</Link></li>
              <li className='nav-links'><Link to="/signup">Sign Up</Link></li>
            </ul>
          </nav>
          </header>
      }
    </>
  )
} 
    
export default NavBar
