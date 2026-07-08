import { useRef } from "react"


const App = () => {

  const nameRef = useRef("");
  const emailRef = useRef("");
  const ageRef = useRef("");
  const skillRef = useRef("");

  const inputNameRef = useRef();
  const inputAgeRef = useRef();
  const inputEmailRef = useRef();
  const inputSkillRef = useRef();

  const handleResumeChange = () => {
    nameRef.current.innerText = inputNameRef.current.value;
    emailRef.current.innerText = inputAgeRef.current.value;
    ageRef.current.innerText = inputEmailRef.current.value;
    skillRef.current.innerText = inputSkillRef.current.value;
  }

  return (
    <>
      <section>
        <input type="text" placeholder="Enter Name" onChange={handleResumeChange} ref={inputNameRef} />
        <input type="text" placeholder="Enter Age" onChange={handleResumeChange} ref={inputAgeRef} />
        <input type="text" placeholder="Enter Email" onChange={handleResumeChange} ref={inputEmailRef} />
        <input type="text" placeholder="Enter Skill" onChange={handleResumeChange} ref={inputSkillRef} />
        <p ref={nameRef}></p>
        <p ref={ageRef}></p>
        <p ref={emailRef}></p>
        <p ref={skillRef}></p>
      </section>
    </>
  )
}

export default App