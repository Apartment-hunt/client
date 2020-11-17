import { Row } from "react-bootstrap";

export default function DashboardStatus(pageName) {
  return (
    <div className="col-md-12 pt-4" style={{ backgroundColor: "#fff" }}>
      <Row>
        <div className="col-md-8 col-8 col-sm-8 pl-5">
          <p>{pageName.pageName.name}</p>
        </div>
        <div className="col-md-4 col-4 col-sm-4 text-right pr-5">
          <p>Shakib (default Name)</p>
        </div>
      </Row>
    </div>
  );
}
