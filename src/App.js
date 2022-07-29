import React,{useState} from "react";
import Auth from "./components/auth";
import Main from "./components/main";
import { AuthContext}  from "./authContext";



function App() {
  const[isAuth, setIsAuth]=useState('')
  return (
    <AuthContext.Provider value={{isAuth, setIsAuth}}>
      <div>
        {!isAuth ? <Auth/> : <Main/>}
      </div>
    </AuthContext.Provider>
  );
}

export default App;
