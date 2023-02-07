import { useState } from 'react';
import LoginForm from '../components/LoginForm';

export default function LoginPage(props) {

  const [credentials,setCredentials] = useState({});

  const handleChange = (e) => {
    const {name,value} = e.target;
    setCredentials({...credentials,[name]:value});
  }

  const handleSubmit = (e)=>{
    alert("Login Clicked");
    e.preventDefault();
  }

  return <div className=" w-screen h-screen  bg-[url('/loginSidePanel.png')] bg-no-repeat bg-contain bg-right bg-fixed" >
    <div className='flex flex-col h-screen py-4'>

    <img src='/GDGLogo.png' width="200" height="20" ></img>
    <div className='px-40'>
    <LoginForm handleChange={handleChange} handleSubmit={handleSubmit}/>
    </div>
    
    <img src='/WTMLogo.png'width="200" height="20"></img>

    </div>
    
         </div>;
}
