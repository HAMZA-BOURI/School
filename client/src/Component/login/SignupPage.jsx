  import React, { useState } from 'react';
  import axios from 'axios';
  import './SignupPage.css';

  const SignupPage = () => {
    const [formData, setFormData] = useState({
      prenom: '',
      nom: '',
      cin: '',
      motDePasse: '',
    });

    function handleChange(e) {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Formulaire soumis:', formData);

      // Make API call to signup endpoint
      axios.post('http://localhost:5000/api/signup', formData)
        .then(response => {
          console.log('User signed up successfully:', response.data);
          // Optionally, you can reset the form or redirect the user
          setFormData({
            prenom: '',
            nom: '',
            cin: '',
            motDePasse: '',
          });
        })
        .catch(error => {
          console.error('There was an error signing up!', error);
        });
    };

    return (
      <div className="signup-container">
        <form className="signup-form" onSubmit={handleSubmit}>
          <h2>Inscription</h2>
          <div className="form-group">
            <label htmlFor="prenom">Prénom :</label>
            <input
              type="text"
              id="prenom"
              name="prenom"
              value={formData.prenom}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="nom">Nom :</label>
            <input
              type="text"
              id="nom"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="cin">CIN :</label>
            <input
              type="text"
              id="cin"
              name="cin"
              value={formData.cin}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="motDePasse">Mot de passe :</label>
            <input
              type="password"
              id="motDePasse"
              name="motDePasse"
              value={formData.motDePasse}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="signup-button">Inscription</button>
        </form>
      </div>
    );
  };

  export default SignupPage;
