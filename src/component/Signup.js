import '../App.css';
import React, {useState} from 'react';
import axios from 'axios';
import styled from "styled-components";

const Mainbox=styled.div`
  width: 200px;
  height: 320px;
  border-radius: 10px;
  background-color: white;
  padding-bottom: 50px;

`;

const Textmain=styled.div`
  color: #282c34;
  padding-top: 50px;
  font-weight: 700;
  font-size: 30px;
`;

const Textsub=styled.div`
  color: #282c34;
  padding-top: 50px;
  font-weight: 400;
  font-size: 10px;
`;


const SERVER_URL = process.env.REACT_APP_URL;

function Signup() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSignup = async (userId, password, email) => {

  try {
    
    const response=await
    axios.post(`${SERVER_URL}/api/user/signup`,{
      userId,
      password,
      email,
    });

    if (response.status===200){
      alert(`${response.status}, 회원가입이 완료되었습니다.`)
    }
  } catch (error) {
    if (error.response) {
      if (error.response.status === 401) {
        alert(`${error.response.status}, 이미 사용 중인 아이디입니다.`);
      }
    } else {
      alert('서버에 연결할 수 없습니다. 나중에 다시 시도해주세요.');

    }
  }
};

  return (
    <div className="App">
      <header className="App-header">
        <Mainbox>
        <Textmain>회원가입</Textmain>
        <Textsub>userId와 password는<br></br>필수입니다.</Textsub>
        <input 
        type='text' 
        placeholder='* userId'
        value={userId}
        onChange={(e) => {
          setUserId(e.target.value);
        }} />
        <input 
        type='password'
        placeholder='* password' 
        value={password}
        onChange={(e) => setPassword(e.target.value)}></input>
        <input 
        type='email' 
        value={email}
        placeholder='email'
        onChange={(e) => setEmail(e.target.value)}></input>
        <button onClick={() => handleSignup(userId, password, email)}>회원가입 완료</button>
        </Mainbox>
      </header>
    </div>
  );
}

export default Signup;
