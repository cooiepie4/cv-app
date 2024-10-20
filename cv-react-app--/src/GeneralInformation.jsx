import { useState, useEffect } from "react";

function GeneralInformation() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [edit, setEdit] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form submitted:", { name, email, age });
    setEdit(false);
  }

  function handleEdit() {
    setEdit(true);
  }

  useEffect(() => {
    console.log("Edit mode:", edit);
  }, [edit]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <legend>General Information</legend>
        <fieldset>
          <label>Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={!edit}
          />
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={!edit}
          />
          <label>Age:</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            disabled={!edit}
          />
        </fieldset>

        <button type="submit" disabled={!name || !email || !age}>
          Submit
        </button>

        <button type="button" onClick={handleEdit}>
          Edit
        </button>
      </form>
    </>
  );
}

export default GeneralInformation;
