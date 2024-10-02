import '../App.css';
import React, {useState} from 'react';
import axios from 'axios';
import styled from "styled-components";

const Mainbox=styled.div`
  width: 200px;
  height: 250px;
  border-radius: 10px;
  background-color: white;
  margin-bottom: 50px;
  gap:50px;
`;

const Textmain=styled.div`
  color: #282c34;
  padding-top: 50px;
  font-weight: 700;
  font-size: 30px;
`;



const SERVER_URL = process.env.REACT_APP_URL;

function Login() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (userId, password ) => {

  try {
    
    const response=await
    axios.post(`${SERVER_URL}/api/user/login`,{
      userId,
      password,
    });

    if (response.status===200){
      alert(`로그인 되었습니다. 사용자 고유 id: ${response.data}`)
    }
  } catch (error) {
    if (error.response) {
      alert('로그인 되지않았습니다. 다시 시도해주세요.');

    }
  }
};

  return (
    <div className="App">
      <header className="App-header">
        <Mainbox>
        <Textmain>로그인</Textmain>
        <input 
        type='text' 
        placeholder='userId'
        value={userId}
        onChange={(e) => {
          setUserId(e.target.value);
        }} />
        <input 
        type='password'
        placeholder='password' 
        value={password}
        onChange={(e) => setPassword(e.target.value)}></input>
      
        <button onClick={() => handleLogin(userId, password)}>로그인 완료</button>
        </Mainbox>
      </header>
    </div>
  );
}

export default Login;
