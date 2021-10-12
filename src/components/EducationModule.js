import { Col, Container, Input, Row } from "reactstrap";

export const EducationModule = ({
  education,
  setEducation = () => {},
  edIndex,
  edItem,
}) => {
  return (
    <Container className="mb-2">
      <Row>
        <Col sm={4}>
          <h5 className="mt-2">Institute :</h5>
        </Col>
        <Col sm={8}>
          <Input
            placeholder="Enter Institute Name"
            value={edItem?.institute || ""}
            onChange={(e) => {
              const newEducation = [...education];
              newEducation[edIndex].institute = e.target.value;
              setEducation(newEducation);
            }}
          />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col sm={4}>
          <h5 className="mt-2">Degree :</h5>
        </Col>
        <Col sm={8}>
          <Input
            placeholder="Enter Degree Name"
            value={edItem?.degree || ""}
            onChange={(e) => {
              const newEducation = [...education];
              newEducation[edIndex].degree = e.target.value;
              setEducation(newEducation);
            }}
          />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col sm={4}>
          <h5 className="mt-2">Year :</h5>
        </Col>
        <Col sm={8}>
          <Input
            type="number"
            placeholder="Enter Year Of Passing"
            value={edItem?.year || ""}
            onChange={(e) => {
              const newEducation = [...education];
              newEducation[edIndex].year = e.target.value;
              setEducation(newEducation);
            }}
          />
        </Col>
      </Row>
      <hr />
    </Container>
  );
};
