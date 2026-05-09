import './ResumeButton.css';
export default function ResumeButton() {
  return (
    <a
      href={process.env.PUBLIC_URL + "/Dustine_Trieu_SWE_2026.pdf"}
      download="Dustine_Trieu_Resume.pdf"
      className="resume-button"
    >
      Download Resume
    </a>
  );
}
