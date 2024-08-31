import React, { useState } from 'react';
import './Login.css';
import loginIcon from '../../assets/images/logo.png';
import lockIcon from '../../assets/images/lock.png';
import avatarIcon from '../../assets/images/avatar_login.png';
import bgImgLogo from '../../assets/images/demo2.png';
import { login } from '../../api/login';
import { useNavigate } from 'react-router-dom';


export default function Login() {

  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  })

  const navigate = useNavigate()

  const loginSubmit = (event) => {
    event.preventDefault(); // 防止默认的表单提交行为
    console.log("提交表单");
    login(loginData.username, loginData.password).then((response) => {
      console.log("loginSubmit:", response.data);

      if(response.data.code === 1) {
        //成功
        localStorage.setItem("userInfo", JSON.stringify(response.data))
        navigate("/home")
      }else {
        alert(response.data.msg)
      }
    })

   
    
  }


  const handleFormData = (event) => {
    const {name, value} = event.target

    console.log(event.target.value);

    setLoginData({
      ...loginData,
      [name]: value
    })
  }
  return (
    <div className='login-parent'>
      <div className="login-container">
        <img src={bgImgLogo} alt="Login" id='img-login' />
        <form className='login-form' onSubmit={loginSubmit}>
          <div className='login-title-container'>
            <img src={loginIcon} style={{ height: '60px', width: '60px' }} alt=''/>
            <p id='title-login'>瑞吉外卖</p>
          </div>

          <div className='input-login-container' id='username-login'>
            <img src={avatarIcon} style={{ height: '30px', width: '30px' }} alt=''/>
            <input className='input-login' type="text" placeholder="Username" name='username'
              value={loginData.username} onChange={handleFormData}/>
          </div>
          <div className='line-below-input' />

          <div className='input-login-container' id='password-login'>
            <img src={lockIcon} style={{ height: '30px', width: '30px' }} alt=''/>
            <input className='input-login' type="text" placeholder="Password" 
              value={loginData.password} onChange={handleFormData} name='password'/>
          </div>
          <div className='line-below-input' />

          <button id='btn-login'>登录</button>
        </form>
      </div>
    </div>
  )
}
