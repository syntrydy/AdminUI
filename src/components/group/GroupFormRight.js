import React from "react";
import PropTypes from "prop-types";
import { Card, CardHeader, ListGroup, ListGroupItem, Row } from "shards-react";

const GroupFormRight = ({ title }) => (
  <Card small className="mb-4">
    <CardHeader className="border-bottom">
      <h6 className="m-0">{title}</h6>
    </CardHeader>
    <ListGroup flush>
      <ListGroupItem className="p-3">
        <Row></Row>
      </ListGroupItem>
    </ListGroup>
  </Card>
);

GroupFormRight.propTypes = {
  title: PropTypes.string
};

GroupFormRight.defaultProps = {
  title: "Select users"
};
export default GroupFormRight;
