import { useState } from "react";
function EducationExperiences() {
  const [schoolName, setSchoolName] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [edit, setEdit] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form submitted:", { schoolName, title, date });
    setEdit(false);
  }

  function handleEdit() {
    setEdit(true);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <legend>Educational Experience</legend>
        <fieldset>
          <label>School name: </label>
          <input
            type="text"
            value={schoolName}
            onChange={(e) => setSchoolName(e.target.value)}
            disabled={!edit}
          />
          <label>Title of study:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            disabled={!edit}
          />
          <label>Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            disabled={!edit}
          />
        </fieldset>

        <button type="submit" disabled={!schoolName || !title || !date}>
          Submit
        </button>

        <button type="button" onClick={handleEdit}>
          Edit
        </button>
      </form>
    </>
  );
}

export default EducationExperiences;
