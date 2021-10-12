/* eslint-disable react-hooks/exhaustive-deps */
import "./styles.css";
import { Button, Col, Input, Row, Container } from "reactstrap";
import { useEffect, useState } from "react";
import { EducationModule } from "./EducationModule";
import { ExperienceModule } from "./ExperienceModule";
import { Typeahead } from "react-bootstrap-typeahead";
import { useDispatch } from "react-redux";
import { createResume } from "../actions/resume";
import { useHistory } from "react-router";

export const CreateResume = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [resumeData, setResumeData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    education: [],
    experience: [],
    skills: [],
  });
  const [education, setEducation] = useState([
    { institute: "", degree: "", year: "" },
  ]);
  const [experience, setExperience] = useState([
    { company: "", designation: "", year: "" },
  ]);
  const [skills, setSkills] = useState([]);
  const [errorDialogue, setErrorDialogue] = useState("");

  useEffect(() => {
    if (education) setResumeData({ ...resumeData, education });
  }, [education]);

  useEffect(() => {
    if (experience) setResumeData({ ...resumeData, experience });
  }, [experience]);

  useEffect(() => {
    if (skills) setResumeData({ ...resumeData, skills });
  }, [skills]);

  const onAddEducation = () => {
    setEducation([...education, { institute: "", degree: "", year: "" }]);
  };

  const onAddExperience = () => {
    setExperience([...experience, { company: "", designation: "", year: "" }]);
  };

  const options = [
    { id: "PHP", label: "PHP" },
    { id: "Javascript", label: "Javascript" },
    { id: "Python", label: "Python" },
    { id: "React.js", label: "React.js" },
    { id: "Node.js", label: "Node.js" },
    { id: "Typescript", label: "Typescript" },
    { id: "Angular", label: "Angular" },
    { id: "Vue.js", label: "Vue.js" },
  ];

  const onCreate = () => {
    if (!resumeData.name) {
      setErrorDialogue("Please Enter Name !");
      return;
    }
    if (!resumeData.name) {
      setErrorDialogue("Please Enter Name !");
      return;
    }
    if (!resumeData.email) {
      setErrorDialogue("Please Enter Email !");
      return;
    }
    if (!resumeData.address) {
      setErrorDialogue("Please Enter Address !");
      return;
    }
    if (!resumeData.phone) {
      setErrorDialogue("Please Enter Phone !");
      return;
    }
    if (!resumeData.education.length) {
      setErrorDialogue("Please Add Atleast 1 Education !");
      return;
    }
    if (!resumeData.experience.length) {
      setErrorDialogue("Please Add Atleast 1 Experience !");
      return;
    }
    if (!resumeData.skills.length) {
      setErrorDialogue("Please Add Atleast 1 Skill !");
      return;
    }
    dispatch(createResume(resumeData));
    history.push("/view");
  };

  return (
    <Container className="form mt-5 p-5">
      <Row>
        <Col sm={12} className="text-center">
          <h1>Create Your Resume</h1>
        </Col>
      </Row>
      <Row className="mt-4 d-flex justify-content-center">
        <Col sm={3}>
          <h5 className="mt-2">Full Name :</h5>
        </Col>
        <Col sm={5}>
          <Input
            placeholder="Enter Your Full Name"
            value={resumeData.name}
            onChange={(e) =>
              setResumeData({ ...resumeData, name: e.target.value })
            }
          />
        </Col>
      </Row>
      <Row className="mt-4 d-flex justify-content-center">
        <Col sm={3}>
          <h5 className="mt-2">Email :</h5>
        </Col>
        <Col sm={5}>
          <Input
            type="email"
            placeholder="Enter Your Email"
            value={resumeData.email}
            onChange={(e) =>
              setResumeData({ ...resumeData, email: e.target.value })
            }
          />
        </Col>
      </Row>
      <Row className="mt-4 d-flex justify-content-center">
        <Col sm={3}>
          <h5 className="mt-2">Address :</h5>
        </Col>
        <Col sm={5}>
          <Input
            type="textarea"
            placeholder="Enter Your Address"
            value={resumeData.address}
            onChange={(e) =>
              setResumeData({ ...resumeData, address: e.target.value })
            }
          />
        </Col>
      </Row>
      <Row className="mt-4 d-flex justify-content-center">
        <Col sm={3}>
          <h5 className="mt-2">Phone :</h5>
        </Col>
        <Col sm={5}>
          <Input
            type="number"
            placeholder="Enter Your Phone Number"
            value={resumeData.phone}
            onChange={(e) =>
              setResumeData({ ...resumeData, phone: e.target.value })
            }
          />
        </Col>
      </Row>
      <Row className="mt-5 d-flex justify-content-center">
        <Col sm={8}>
          <h4 className="mb-0">EDUCATION :</h4>
        </Col>
      </Row>
      <Row className="mt-4 d-flex justify-content-center">
        <Col sm={8}>
          {education.map((edItem, edIndex) => (
            <EducationModule
              key={`ed-${edIndex}`}
              edItem={edItem}
              edIndex={edIndex}
              education={education}
              setEducation={setEducation}
            />
          ))}
        </Col>
        <Col sm={8} className="text-center">
          <Button
            className="bg-transparent border-1 border-white"
            onClick={() => onAddEducation()}
          >
            Add Another Education
          </Button>
        </Col>
      </Row>
      <Row className="mt-5 d-flex justify-content-center">
        <Col sm={8}>
          <h4 className="mb-0">EXPERIENCE :</h4>
        </Col>
      </Row>
      <Row className="mt-4 d-flex justify-content-center">
        <Col sm={8}>
          {experience.map((exItem, exIndex) => (
            <ExperienceModule
              key={`ex-${exIndex}`}
              exItem={exItem}
              exIndex={exIndex}
              exp={experience}
              setExp={setExperience}
            />
          ))}
        </Col>
        <Col sm={8} className="text-center">
          <Button
            className="bg-transparent border-1 border-white"
            onClick={() => onAddExperience()}
          >
            Add Another Experience
          </Button>
        </Col>
      </Row>
      <Row className="mt-5 d-flex justify-content-center">
        <Col sm={3}>
          <h5 className="mt-2">Add Skills :</h5>
        </Col>
        <Col sm={5}>
          <Typeahead
            id="skills-list"
            multiple
            onChange={(e) => setSkills(e.map((e) => e.label))}
            options={options}
            placeholder="Add Your Skills"
            align="left"
            allowNew
            dropup
            newSelectionPrefix="Add New Skill: "
          />
        </Col>
      </Row>
      <Row className="mt-5 d-flex justify-content-center">
        <Col sm={8} className="text-center">
          <Button
            className="bg-transparent border-2 border-white"
            onClick={() => onCreate()}
            size="lg"
          >
            Create Resume
          </Button>
        </Col>
        <Col sm={12} className="text-center mt-2">
          <span className="text-danger">{errorDialogue}</span>
        </Col>
      </Row>
    </Container>
  );
};
