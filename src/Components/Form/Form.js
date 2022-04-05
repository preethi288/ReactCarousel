import React from "react";

function Form() {
  return (
    <div className="container">
      <h1>Form</h1>
      <form>
      <label>Name:</label>
      <input type="text" placeholder="Enter name here..." />
        <label>Email:</label>
      <input type="email" placeholder="Enter Email here..." />
        <button type="submit">Submit</button>
      </form>
       
    
    </div>
  );
}

export default Form;
