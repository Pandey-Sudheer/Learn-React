import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {setUser} = useContext(UserContext)
    // creating method called handle submit
    const handleSubmit = (e) => {
    //e.preventDefault() tells the browser:
    // “Don’t do your built-in action. I’ll handle this event myself.”
    // This gives full control to the developer.
        e.preventDefault()
        setUser({username, password})
    }
  return (
    <div>
      <h2>Login</h2>
      <input type="text" 
      value = {username} 
      onChange = {(e) =>setUsername(e.target.value)} 
      placeholder='UserName' />
      {" "}
      <input type="text" 
      value = {password} 
      onChange = {(e) =>setPassword(e.target.value)}
      placeholder='Password' />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
