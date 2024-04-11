import React,{useEffect,createContext,useReducer,useContext} from 'react';
import NavBar from './components/Navbar'
import "./App.css"
import {BrowserRouter,Route,Routes,useNavigate} from 'react-router-dom'
import Home from './components/screens/Home'
import Signin from './components/screens/SignIn'
import Profile from './components/screens/Profile'
import Signup from './components/screens/Signup'
import CreatePost from './components/screens/CreatePost'
import {reducer,initialState} from './reducers/userReducer'
import UserProfile from './components/screens/UserProfile'
import SubscribedUserPosts from './components/screens/SubscribesUserPosts'
import Reset from './components/screens/Reset'
import NewPassword from './components/screens/Newpassword'
export const UserContext = createContext()


const Routing = ()=>{
  const navigate = useNavigate()
  const {state,dispatch} = useContext(UserContext)
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"))
    if(user){
      dispatch({type:"USER",payload:user})
    }else{
      if(!navigate.call('/reset'))
           navigate.call('/signin')
    }
  },[])
  return(
    <Routes>
      <Route exact path="https://pawan-project-3.onrender.com/" element={<Home />}>
      
      </Route>
      <Route path="https://pawan-project-3.onrender.com/signin" element={<Signin />}>
        
      </Route>
      <Route path="https://pawan-project-3.onrender.com/signup" element={<Signup />}>
        
      </Route>
      <Route exact path="https://pawan-project-3.onrender.com/profile" element={<Profile />}>
        
      </Route>
      <Route path="https://pawan-project-3.onrender.com/create" element={<CreatePost/>}>
        
      </Route>
      <Route path="https://pawan-project-3.onrender.com/profile/:userid" element={<UserProfile />}>
        
      </Route>
      <Route path="https://pawan-project-3.onrender.com/myfollowingpost" element={<SubscribedUserPosts />}>
        
      </Route>
      <Route exact path="https://pawan-project-3.onrender.com/reset" element={<Reset/>}>
        
      </Route>
      <Route path="https://pawan-project-3.onrender.com/reset/:token" element={<NewPassword />}>
        
      </Route>
      
    </Routes>
  )
}

function App() {
  const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <UserContext.Provider value={{state,dispatch}}>
    <BrowserRouter>
      <NavBar />
      <Routing />
      
    </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;