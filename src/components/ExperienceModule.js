import { Col, Container, Input, Row } from "reactstrap";

export const ExperienceModule = ({
  exp,
  setExp = () => {},
  exIndex,
  exItem,
}) => {
  return (
    <Container className="mb-2">
      <Row>
        <Col sm={4}>
          <h5 className="mt-2">Company :</h5>
        </Col>
        <Col sm={8}>
          <Input
            placeholder="Enter Company Name"
            value={exItem?.company || ""}
            onChange={(e) => {
              const newExp = [...exp];
              newExp[exIndex].company = e.target.value;
              setExp(newExp);
            }}
          />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col sm={4}>
          <h5 className="mt-2">Designation :</h5>
        </Col>
        <Col sm={8}>
          <Input
            placeholder="Enter Your Designation"
            value={exItem?.designation || ""}
            onChange={(e) => {
              const newExp = [...exp];
              newExp[exIndex].designation = e.target.value;
              setExp(newExp);
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
            placeholder="Enter Joining Year"
            value={exItem?.year || ""}
            onChange={(e) => {
              const newExp = [...exp];
              newExp[exIndex].year = e.target.value;
              setExp(newExp);
            }}
          />
        </Col>
      </Row>
      <hr className="my-4" />
    </Container>
  );
};
