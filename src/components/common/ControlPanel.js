import React from "react";
import { Row, Col, Button, DropdownItem } from "shards-react";

const ControlPanel = () => {
  return (
    <div>
      <DropdownItem divider />
      <Row form>
        <Col md="6" className="form-group">
          <Button type="submit" theme="primary">
            <i className="material-icons">save_alt</i>
            Save
          </Button>
        </Col>
        <Col md="6" className="form-group">
          <Button type="reset" theme="warning" style={{ float: "right" }}>
            <i className="material-icons">arrow_back</i>
            Cancel
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default ControlPanel;
