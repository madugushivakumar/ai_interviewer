import React, { useState } from 'react';
import  "./SignUpForm.css";
function SignUpForm() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSignUp = () => {
    const { firstName, lastName, email, password, confirmPassword } = formData;

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setError('');
    alert('Sign up successful!');
    console.log(formData);
  };

  return (
    <div style={{ padding: '20px' }}>
      

      {!showForm ? (
        <div className="sign-up">
        <button className="sign"onClick={() => setShowForm(true)} >Sign Up</button>
        </div>
        ):(
        <div className="form">
          <h2 className='sf'>Sign Up Form</h2>

          <input 
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
          /><br /><br />

          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
          /><br /><br />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          /><br /><br />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          /><br /><br />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Re-enter Password"
            value={formData.confirmPassword}
            onChange={handleChange}
          /><br /><br />

          {error && <p style={{ color: 'red' }}>{error}</p>}

          <button  className="su"onClick={handleSignUp}>Sign Up</button>
        </div>
      )}
    </div>
  );
}

export default SignUpForm;
