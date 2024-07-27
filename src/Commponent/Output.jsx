

import React from "react";

function Output({ firstName, lastName, socialLink, hobbies }) {
  return (
    <div className="outputdiv">
      <h1>Your Data</h1>
      <h2>First Name: {firstName}</h2>
      <h2>Last Name: {lastName}</h2>
      <h2>Social Link: {socialLink}</h2>
      <h2>Hobbies: {hobbies.join(", ")}</h2>
    </div>
  );
}

export default Output;


