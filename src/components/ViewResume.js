import { useSelector } from "react-redux";
import { useRef } from "react";
import "./styles.css";
import { PDFExport } from "@progress/kendo-react-pdf";
import { Button, Col, Row, Container, Table } from "reactstrap";
import { useHistory } from "react-router";

export const ViewResume = () => {
  const history = useHistory();
  const resumeData = useSelector((state) => state.resume);
  const pdfExportComponent = useRef(null);
  const exportPDF = () => {
    if (pdfExportComponent.current) {
      pdfExportComponent.current.save();
    }
  };
  return (
    <Container>
      <Row className="d-flex justify-content-center">
        <Col sm={12} className="my-5 page">
          <PDFExport
            ref={pdfExportComponent}
            paperSize="auto"
            margin={40}
            fileName={`Resume of ${resumeData.name}`}
          >
            <Container className="bg-white p-5">
              <Row>
                <Col sm={12}>
                  <h3 className="text-center">{resumeData.name}</h3>
                </Col>
                <Col sm={12} className="mt-2">
                  <h6 className="text-center">{`${resumeData.email}  |  ${resumeData.phone}`}</h6>
                </Col>
                <Col sm={12} className="mt-1">
                  <h6 className="text-center">{resumeData.address}</h6>
                </Col>
              </Row>
              <Row className="mt-4">
                <Col sm={12}>
                  <h5>EXERIENCE</h5>
                </Col>
                <Col sm={12}>
                  <Table>
                    <thead>
                      <tr>
                        <th style={{ width: "40%" }}>Company Name</th>
                        <th style={{ width: "40%" }}>Designation</th>
                        <th style={{ width: "20%" }}>Year Of Joining</th>
                      </tr>
                    </thead>
                    <tbody>
                      {resumeData.experience.map((item, index) => {
                        return (
                          <tr key={`exp-row-${index}`}>
                            <td>{item.company}</td>
                            <td>{item.designation}</td>
                            <td>{item.year}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                </Col>
              </Row>
              <Row className="mt-4">
                <Col sm={12}>
                  <h5>EDUCATION</h5>
                </Col>
                <Col sm={12}>
                  <Table>
                    <thead>
                      <tr>
                        <th style={{ width: "40%" }}>Institute Name</th>
                        <th style={{ width: "40%" }}>Degree</th>
                        <th style={{ width: "20%" }}>Year Of Passing</th>
                      </tr>
                    </thead>
                    <tbody>
                      {resumeData.education.map((item, index) => {
                        return (
                          <tr key={`ed-row-${index}`}>
                            <td>{item.institute}</td>
                            <td>{item.degree}</td>
                            <td>{item.year}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                </Col>
              </Row>
              <Row className="mt-4">
                <Col md={12}>
                  <h5>SKILLS</h5>
                </Col>
                <Col md={12}>
                  {resumeData.skills.map((item, index) => {
                    return (
                      <span key={`skill-${index}`} className={index && "mx-4"}>
                        {item}
                      </span>
                    );
                  })}
                </Col>
              </Row>
            </Container>
          </PDFExport>
        </Col>
        <Col sm={6} className="text-center">
          <Button color="success" onClick={() => exportPDF()}>
            Download Resume
          </Button>
        </Col>
        <Col sm={6} className="text-center">
          <Button color="primary" onClick={() => history.push("/")}>
            Create New Resume
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
