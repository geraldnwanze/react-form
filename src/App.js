import { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isFriendly: true,
    employment: "",
    favoriteColor: ""
  });

  function handleFormInput(event) {
    const {name, value, type, checked} = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value
    }))
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <div className="app">
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>

        <input 
          type="text" 
          name="firstName" 
          placeholder="First Name" 
          onChange={handleFormInput} 
          value={formData.firstName} 
        />

        <input 
          type="text" 
          name="lastName" 
          placeholder="Last Name" 
          onChange={handleFormInput} 
          value={formData.lastName} 
        />

        <input 
          type="email" 
          name="email" 
          placeholder="Email" 
          onChange={handleFormInput} 
          value={formData.email} 
        />

        <textarea 
          name="comments" 
          placeholder="Comments" 
          value={formData.comments} 
          onChange={handleFormInput} 
          rows="5"
        />

        <label>
          <input 
            type="checkbox" 
            name="isFriendly" 
            checked={formData.isFriendly} 
            onChange={handleFormInput}
          /> 
          Are you friendly?
        </label>

        <fieldset>
          <legend>Employment Status</legend>

          <label>
            <input 
              type="radio" 
              name="employment" 
              value="unemployed"
              checked={formData.employment === "unemployed"}
              onChange={handleFormInput}
            />
            Unemployed
          </label>

          <label>
            <input 
              type="radio" 
              name="employment" 
              value="part-time"
              checked={formData.employment === "part-time"}
              onChange={handleFormInput}
            />
            Part-time
          </label>

          <label>
            <input 
              type="radio" 
              name="employment" 
              value="full-time"
              checked={formData.employment === "full-time"}
              onChange={handleFormInput}
            />
            Full-time
          </label>
        </fieldset>

        <label>
          <select name="favoriteColor" value={formData.favoriteColor} onChange={handleFormInput}>
            <option value="">-- choose color --</option>
            <option value="red">red</option>
            <option value="blue">blue</option>
            <option value="yellow">yellow</option>
            <option value="green">green</option>
            <option value="black">black</option>
          </select>
          What is your favorite color?
        </label>

        <button>submit</button>

      </form>
    </div>
  );
}

export default App;
