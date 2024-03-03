import { useState } from "react";
export default function Form() {
  const [first, setFirstname] = useState("");
  const [last, setLastname] = useState("");
  const [show,setShow] = useState(false)

   const handleChange = (e) => {
     if (e.target.name === "firstName"){
        setFirstname(e.target.value)
     }
     else{
        setLastname(e.target.value)
     }
   }
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // if (first!=="" && last!=="")
         setShow(true)
        // setFullname(e.target.firstName.value + " " + e.target.lastName.value);
      }}
    >
      <h1>Full Name Display</h1>
      <label htmlFor="firstName">First Name:</label>
      <input onChange={handleChange} value={first} required type="text" name="firstName" />
      <br />
      <label htmlFor="lastName">Last Name:</label>
      <input onChange={handleChange} value={last} required type="text" name="lastName" />
      <br />
      <button type="submit">submit</button>
      {show && <p>Full Name: {first} {last}</p>}
    </form>
  );
}
