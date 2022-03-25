import { Link } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
      <header>
          <nav className='nav-bar'>
              <li id='welcome'>Welcome, {user.name}</li>
            <div>
              <Link to="/">
                <img src="../Logo test.PNG" alt="" />
              </Link>
            </div>
            <ul>
              <li><Link to="/profiles">Profiles</Link></li>
              <li><Link to="" onClick={handleLogout}>LOG OUT</Link></li>
              <li><Link to="/changePassword">Change Password</Link></li>
            </ul>
          </nav>
          </header>
        :
        <header>
          <nav className='nav-bar'>
            <ul>
              <li><Link to="/login">Log In</Link></li>
              <li><Link to="/signup">Sign Up</Link></li>
            </ul>
          </nav>
          </header>
      }
    </>
  )
} 
    
  

export default NavBar
