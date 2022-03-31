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
import * as profileService from './services/profileService'
import MountainDetails from './pages/MountainDetails/MountainDetails'
import MyProfile from './components/MyProfile/MyProfile'
import AddMountain from './pages/AddMountain/AddMountain'
import EditMountain from './pages/EditMountain/EditMountain'
import SearchBar from './components/SearchBar/SearchBar'
import CountryList from './pages/CountryList/CountryList'
import * as countryService from './services/countryService'
import CountryDetails from './pages/CountryDetails/CountryDetails'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [profile, setProfile] = useState({})
  const navigate = useNavigate()
  const [mountains, setMountains] = useState([])
  const [userProfile, setUserProfile] = useState(null)
  const [countries, setCountries] = useState([])

  // console.log("App JSX Profile", profile)
  // console.log("App JSX userProfile", userProfile)
  // console.log("App JSX User", user)

  useEffect(()=> {
    countryService.getAllCountries()
    .then(countries => setCountries(countries))
  }, [])

  useEffect(()=> {
    mountainService.getAllMountains()
    .then(mountains => setMountains(mountains.slice(0, 18)))
  }, [])

  useEffect(()=> {
    profileService.getAllProfiles()
    .then(profiles=> {
        let myProfile = profiles.filter(profile => profile._id.includes(user.profile))
        setUserProfile(myProfile)
    }) 
  }, [])

  const setUsrProf2 = 

  useEffect(()=> {
  },[userProfile])

  const handleAddMountain = async newMountainData => {
    const newMountain = await mountainService.create(newMountainData)
    setMountains([...mountains, newMountain])
    navigate('/mountains')
  }

  const handleCreateComment = async (mountain, newCommentData) => {
    console.log('commentData', newCommentData.comment)
    const newComment = await mountainService.createComment(mountain, newCommentData)
  }

  const handleDeleteMountain = id => {
    mountainService.deleteMountain(id)
    .then(deletedMountain => setMountains(mountains.filter(mountain => mountain._id !== deletedMountain._id)))
  }

  const handleUpdateMountain = updatedMountainData => {
    mountainService.update(updatedMountainData)
    .then(updatedMountain => {
      const newMountainsArray = mountains.map(mountain => mountain._id === updatedMountain._id ? updatedMountain : mountain)
      setMountains(newMountainsArray)
      navigate('/mountains')
    })
  }

  const searchMountain = searchString => {
    mountainService.search(searchString)
    .then(mountains => setMountains(mountains))
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

  const addPeakToCollection = peak => {
    profileService.addPeak(peak)
    .then(updatedProfile => {
      setProfile(updatedProfile)
    })
  }

  return (
    <>

      <NavBar user={user} handleClick={handleClick} profile={profile} handleLogout={handleLogout} />

      <Routes>
        <Route path="/" element={<Landing user={user} />} />

        <Route path="/profile" element={<ProfileDetails  user={user} profile={profile}/>} />

        <Route path="/myprofile" element={<ProfileDetails user={user} userProfile={userProfile} profile={profile} />} />

        <Route path="/addmountain" element={<AddMountain handleAddMountain={handleAddMountain} />} />

        <Route path='/mountains'
          element={ 
            user ?
            <>
              <MountainList
                handleDeleteMountain={handleDeleteMountain}
                mountains={mountains}
                user={user} 
              />
              <SearchBar searchMountain={searchMountain} />
            </>
            :
            <Navigate to='/login' />
          }
        />

        <Route path='/countries'
          element={
            <>
              <CountryList countries={countries} user={user}/>
            </>
          }
        />

        <Route path='/country'
          element={
            <>
              <CountryDetails />
            </>
          } />

        <Route path="/editmountain" element={<EditMountain handleUpdateMountain={handleUpdateMountain} />} />

        <Route path="/mountain" element={<MountainDetails
        addPeakToCollection={addPeakToCollection}
        handleDeleteMountain={handleDeleteMountain} handleCreateComment={handleCreateComment} />} />
        
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
