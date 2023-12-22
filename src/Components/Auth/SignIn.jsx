import React,{ useState } from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../config/firebase';
function SignIn() {

  const regex = /@dizparc\.se$/;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    const [invalid, setInvalid] = useState(false);
  const signIn = async () => {
    if(regex.test(email)){
    try {
        setInvalid(false);
        await signInWithEmailAndPassword(auth, email, password);
      
    } catch (err){
      console.error(err);
    }
    }
    else{
        setInvalid(true)
    }
  };
  return (
    <div className="login-box">
        <form className="login-form">
            {invalid ? <label>Invalid email</label> : null}
        <input type="email" placeholder="Email-address" onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        </form>
        <button className="login-button" onClick={signIn}>SIGN IN</button>
    </div>
  )
}

export default SignIn