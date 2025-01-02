import React, { useState, useEffect } from 'react'; // Added useEffect import
import axios from 'axios';
import './login.css';

function LoginPage() {
  const [cin, setCin] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here (probably an API call)
    console.log('CIN:', cin);
    console.log('Mot de passe:', password);

    // Example of posting login credentials to an API
    axios.post('http://localhost:5000/api/login', { cin, password })
      .then(response => {
        console.log('Login successful:', response.data);
        // Handle successful login (e.g., store token, redirect)
      })
      .catch(error => {
        console.error('Login failed:', error);
        // Handle login error (e.g., show error message)
      });
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Connexion</h2>
        <div className="form-group">
          <label htmlFor="cin">CIN</label>
          <input
            type="text"
            id="cin"
            value={cin}
            onChange={(e) => setCin(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">Connexion</button>
        <p className="signuppage">
          Vous n'avez pas de compte?{" "}
          <a href="/SignupPage">Inscrivez-vous</a>
        </p>
      </form>
    </div>
  );
}

// Users Component (Optional: move to a separate file if needed)
const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch data from Express API
    axios.get('http://localhost:5000/api/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the users!', error);
      });
  }, []);

  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.prenom} {user.nom}</li>
        ))}
      </ul>
    </div>
  );
};

export default LoginPage;
