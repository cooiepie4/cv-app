import { useState } from "react";
function PracticalExperiences() {
  const [companyName, setCompanyName] = useState("");
  const [positionTitle, setPositionTitle] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [edit, setEdit] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form submitted:", {
      companyName,
      positionTitle,
      responsibilities,
    });
    setEdit(false);
  }

  function handleEdit() {
    setEdit(true);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <legend>General Information</legend>
        <fieldset>
          <label>Company name: </label>
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            disabled={!edit}
          />
          <label>Position title:</label>
          <input
            type="text"
            value={positionTitle}
            onChange={(e) => setPositionTitle(e.target.value)}
            disabled={!edit}
          />
          <label>Responsibilities:</label>
          <input
            type="text"
            value={responsibilities}
            onChange={(e) => setResponsibilities(e.target.value)}
            disabled={!edit}
          />
        </fieldset>

        <button
          type="submit"
          disabled={!companyName || !positionTitle || !responsibilities}
        >
          Submit
        </button>

        <button type="button" onClick={handleEdit}>
          Edit
        </button>
      </form>
    </>
  );
}

export default PracticalExperiences;
