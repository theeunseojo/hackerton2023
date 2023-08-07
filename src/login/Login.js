// Login.js
import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

function Login () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // 로그인 요청하기 , 서버주소로 변경 작업 필요 ! ,
    axios.post('/api/login', { email, password })
      .then((response) => {
        console.log(response.data); 
      })
      .catch((error) => {
        console.log(error,"오류");
      });
  };

  return (
    <div className = "container">
      <h1>로그인 페이지</h1>
      <form>
        <div>
          <label>이메일:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>비밀번호:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="button" onClick={handleLogin}>로그인</button>
      </form>
    </div>
  );
};

export default Login;
