import React, { useEffect, useState } from 'react'
// import registration from './Registration';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import img from './images/4.jpg';
import './login.css';

export default function Login() {

  const [username, updatedUsername] = useState('');
  const [password, updatedPassword] = useState('');
  const usenavigate = useNavigate();

  useEffect(() => {
    sessionStorage.clear();
  })

  const proceed = (e) => {
    e.preventDefault();
    if (validate()) {
      fetch('http://localhost:3000/user/' + username).then((res) => {
        return res.json();
      }).then((resp) => {
        if (Object.keys(resp).length === 0) {
          toast.error("Please Enter Valid Username!")
        } else {
          if (resp.password === password) {
            toast.success('Successfully Logged In');
            sessionStorage.setItem('username', username);
            window.location.assign('http://localhost:8501');
          } else {
            toast.error("Please Enter Valid Credentials!!")
          }
        }
        console.log(resp)
      }).catch((err) => {
        toast.error("Invalid Login" + err.message)
      });
    }
  }

  const validate = () => {
    let result = true;
    if (username === '' || username === null) {
      result = false;
      toast.warning("Please enter username !");
    }
    if (password === '' || password === null) {
      result = false;
      toast.warning("Password is empty ");
    }
    return result;
  }
  return (
    <div className="login-page">
      
      <div className='ca'>
        <form onSubmit={proceed} className='form'>
          <div className='ok'>  
          <div className='head'>
            <h1>Login To Your Account</h1>
          </div>
            <div className='input'>
              <div className='input1'>
                <label className='label1'>Username <span>*</span></label>
                <input type='text' value={username} onChange={e => updatedUsername(e.target.value)} className=''></input>
              </div>
              <div className='input2'>
                <label className='label2'>password <span>*</span></label>
                <input type='password' value={password} onChange={e => updatedPassword(e.target.value)} className=''></input>
              </div>
            </div>
            <div className='button'>
              <button type='submit' className='button1'> Login</button>
              <Link className='button2' to={'/registration'}> New User? Click Here </Link>
            </div>
          </div>
        </form>
      </div>
    </div>

  )
}
