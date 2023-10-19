
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase.init";
import { useState } from "react";


const Login = () => {

  const [user, setUser] = useState(null)

  const auth = getAuth(app)
  console.log(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

 const handleGithubSingin = () =>{
   signInWithPopup(auth, githubProvider)
   .then(result => {
     const loginUser = result.user;
     console.log(loginUser);
     setUser(loginUser)
   })
 }



  const handleGoogleSingin = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const logUser = result.user;
        console.log(logUser);
        setUser(logUser)
      })

      .catch(error => {
        console.log("error", error.massage);
      })

  }

  const handleSiginOut = () => {
    signOut(auth)
      .then(result => {
        console.log(result);
        setUser(null)
      })
      .catch(error => {
        console.log(error);
      })
  }

  return (
    <div className=" space-x-5">

      {
        user ?
          <button
            onClick={handleSiginOut}
            className="btn btn-outline btn-error">Sigin Out</button> :

          <div>
            <button
              onClick={handleGoogleSingin}
              className="btn btn-outline btn-warning">Login</button>
            <button
              onClick={handleGithubSingin}
              className="btn btn-outline btn-warning">GLogin</button>
          </div>

      }


      {user &&
        <div>
          <h1 className=" text-3xl font-bold">UserName: {user.displayName} </h1>
          <h1 className=" text-2xl font-bold"> Email: {user.email} </h1>
          <img className="mx-auto rounded-full" src={user.photoURL} alt="" />
          <h1>{user.metadata.lastSignInTime}</h1>

        </div>
      }


    </div>
  );
};

export default Login;