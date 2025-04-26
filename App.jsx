import { useState } from 'react';
import './App.css';
import  SignUpForm from "./SignUpForm.jsx";
import  "./SignUpForm.css";
import  Login from"./Login";
import "./Login.css"
import ResumeUploader from './ResumeUploader.jsx';
import SidebarLayout from './SidebarLayout.jsx';
import './SidebarLayout.css';

function App() {
  const [showSignUp, setShowSignUp] = useState(false);

  const handleSignUpClick = () => {
    setShowSignUp(true);
   
  };
  return (
    <>
<div className='main'>
    
          <div>
          <SignUpForm />
          <Login />
          </div>
     
          <div> 
          </div>
        <div className='main2'>
      <SidebarLayout />     
    </div>
      
      
      
      
      </div>
    </>
   
      );
    }
    
    
export default App;