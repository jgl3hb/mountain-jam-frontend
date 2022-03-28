import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import * as authService from './services/authService'
import MountainList from './pages/MountainList/MountainList'
import ProfileDetails from './pages/Profile/Profile'
import Mountain from './components/Mountain/Mountain'
import * as mountainService from './services/mountainService'
import MountainDetails from './pages/MountainDetails/MountainDetails'
import MyProfile from './components/MyProfile/MyProfile'
import AddMountain from './pages/AddMountain/AddMountain'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [profile, setProfile] = useState({})
  const navigate = useNavigate()
  const [mountains, setMountains] = useState([])

  useEffect(()=> {
    mountainService.getAllMountains()
    .then(mountains => setMountains(mountains))
  }, [])

  const handleAddMountain = async newMountainData => {
    const newMountain = await mountainService.create(newMountainData)
    setMountains([...mountains, newMountain])
    console.log('new mountain', newMountain)
    navigate('/mountains')
  }
  

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  function handleClick(profile) {
    setProfile(profile)
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />

        <Route path="/profile" element={<ProfileDetails  user={user} profile={profile}/>} />

        <Route path="/myprofile" element={<MyProfile user={user} />} />

        <Route path="/mountains" element={<MountainList mountains={mountains} />} />

        <Route path="/addmountain" element={<AddMountain handleAddMountain={handleAddMountain} />} />

        <Route path="/mountain" element={<MountainDetails/>} />
        
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profiles"
          element={user ? <Profiles handleClick={handleClick} /> : <Navigate to="/login" />}
        />
        <Route
          path="/changePassword"
          element={user ? <ChangePassword handleSignupOrLogin={handleSignupOrLogin}/> : <Navigate to="/login" />}
        />
      </Routes>
    </>
  )
}

export default App
