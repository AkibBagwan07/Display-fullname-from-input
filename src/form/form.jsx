import { useState } from "react";
export default function Form() {
  const [fullname, setFullname] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setFullname(e.target.firstName.value + " " + e.target.lastName.value);
      }}
    >
      <h1>Full Name Display</h1>
      <label htmlFor="firstName">First Name:</label>
      <input required type="text" name="firstName" />
      <br />
      <label htmlFor="lastName">Last Name:</label>
      <input required type="text" name="lastName" />
      <br />
      <button type="submit">submit</button>
      {fullname.length ? <p>Full Name: {fullname}</p> : ""}
    </form>
  );
}
