


import React, { useState } from "react";
import Output from "./Output.jsx";

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [socialLink, setSocialLink] = useState("");
  const [hobbies, setHobbies] = useState([]);
  const [submittedData, setSubmittedData] = useState(null);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleSocialLinkChange = (e) => {
    setSocialLink(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && lastName && socialLink) {
      // Store submitted data
      setSubmittedData({ firstName, lastName, socialLink, hobbies });
      // Clear input fields
      setFirstName("");
      setLastName("");
      setSocialLink("");
      setHobbies([]);
    }
  };

  const addHobby = (hobby) => {
    if (!hobbies.includes(hobby)) {
      setHobbies([...hobbies, hobby]);
    }
  };

  const removeHobby = (hobby) => {
    setHobbies(hobbies.filter((h) => h !== hobby));
  };

  return (
    <>
      <div className="maindiv">
        <form className="form" onSubmit={handleSubmit}>
          <input
            className="input"
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={handleFirstNameChange}
          />
          <input
            className="input"
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={handleLastNameChange}
          />
          <input
            className="input"
            type="text"
            placeholder="Social Link"
            value={socialLink}
            onChange={handleSocialLinkChange}
          />

          <button className="submitbtn" type="submit">
            Submit
          </button>

          <div className="hobbies">
            <h2 className="Add">ADD MORE HOBBIES</h2>
            <ul>
              {["Cooking", "Gardening", "Playing", "Singing", "Dancing"].map((hobby) => (
                <li key={hobby}>
                  {!hobbies.includes(hobby) && (
                    <button
                      className="hobbiebtn"
                      onClick={() => addHobby(hobby)}
                      type="button"
                    >
                      {hobby} +
                    </button>
                  )}
                </li>
              ))}
            </ul>
            <h3>Your Selected Hobbies:</h3>
            <ul>
              {hobbies.map((hobby) => (
                <li key={hobby}>
                  {hobby} 
                  <button onClick={() => removeHobby(hobby)}>Remove</button>
                </li>
              ))}
            </ul>
          </div>
        </form>
      </div>

      {submittedData && (
        <Output
          firstName={submittedData.firstName}
          lastName={submittedData.lastName}
          socialLink={submittedData.socialLink}
          hobbies={submittedData.hobbies}
        />
      )}
    </>
  );
}

export default Form;








