
import React, { useState } from 'react';
import './SignUpForm.css'; 

function Login() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleLogin = () => {
    const { email, password } = formData;

    if (!email || !password) {
      setError('Please fill in both fields.');
      return;
    }

    setError('');
    alert(`Logged in with Email: ${email}`);
    console.log(formData);
  };

  const handleGoogleLogin = () => {
    alert('Simulating Google login...');
    console.log('Google login clicked');
  };

  return (
    <div style={{ padding: '20px' }}>
      {!showForm ? (
        <div className="login">
          <button className="login-btn" onClick={() => setShowForm(true)}>Login</button>
        </div>
      ) : (
        <div className="form-btn">
          <h2 className='h2'>Login</h2>

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

          {error && <p style={{ color: 'red' }}>{error}</p>}

          <button className='lbt' onClick={handleLogin}>Login</button>
          <br /><br />
          <hr style={{ margin: '20px 0' }} />
          <button onClick={handleGoogleLogin} style={{ backgroundColor: '#4285F4', color: 'white', border: 'none', padding: '10px' }}>
            Continue with Google
          </button>
        </div>
      )}
    </div>
  );
}

export default Login;
