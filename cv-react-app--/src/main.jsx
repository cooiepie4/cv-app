import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import GeneralInformation from "./GeneralInformation.jsx";
import EducationExperiences from "./EducationalExperiences.jsx";
import PracticalExperiences from "./PraticalExperiences.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GeneralInformation />

    <EducationExperiences />

    <PracticalExperiences />
  </StrictMode>
);
