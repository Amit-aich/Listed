import React, { useEffect} from 'react';
import jwt_decode from "jwt-decode"
// import Demo from "../Components/demo"

function Signin(props) {

  // const [user, setUser] = useState({});


  function handleCallbackResponse(response){
    console.log("Encoded JWT ID token" + response.credential);
    var userObject = jwt_decode(response.credential);
    console.log( userObject);
    props.setValue(userObject.email)
    localStorage.setItem("email", userObject.email);
  }

  useEffect(() => {
   /* global google */
    google.accounts.id.initialize({
      client_id: "785033832955-coer5fets5ejv9e51u1judd5h8obba93.apps.googleusercontent.com",
      callback : handleCallbackResponse
    });
    props.setValue(localStorage.getItem("email"));
    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {theme : "outline", size: "small"}
    )
  }, []);

  return (
    <div>
      
      <div id="signInDiv"></div>
       
    </div>
  );
}

export default Signin;




// export default function Signin(props) {
//   const handleClick = () => {
   
//     signInWithPopup(auth, provider).then((data) => {
//       props.setValue(data.user.email);
//       localStorage.setItem("email", data.user.email);
//     });
//   };

//   useEffect(() => {
//     props.setValue(localStorage.getItem("email"));
//   }, []);

//   return (
//     <div>
//       <button className="bg-white px-5 p-1 text-gray-400 flex rounded-lg" onClick={handleClick}>
//         <FcGoogle className="mt-1 mr-2" />sign in with Google
//       </button>

//       <p></p>
//     </div>
//   );
// }