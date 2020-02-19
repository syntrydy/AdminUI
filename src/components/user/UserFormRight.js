import React from "react";
import PropTypes from "prop-types";
import Dialog from "../layout/Dialog/AcceptDialogBox";
import { Card, CardHeader, ListGroup, ListGroupItem, Row } from "shards-react";

const UserFormRight = ({ title }) => (
  <Card small className="mb-4">
    <CardHeader className="border-bottom">
      <h6 className="m-0">{title}</h6>
    </CardHeader>
    <ListGroup flush>
      <ListGroupItem className="p-3">
        <Row>
          <Dialog />
        </Row>
      </ListGroupItem>
    </ListGroup>
  </Card>
);

UserFormRight.propTypes = {
  title: PropTypes.string
};

UserFormRight.defaultProps = {
  title: "User claims"
};

export default UserFormRight;
