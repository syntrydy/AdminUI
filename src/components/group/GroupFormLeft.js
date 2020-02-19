import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormInput,
  FormSelect,
  Button
} from "shards-react";

const GroupFormLeft = ({ title }) => (
  <Card small className="mb-4">
    <CardHeader className="border-bottom">
      <h6 className="m-0">{title}</h6>
    </CardHeader>
    <ListGroup flush>
      <ListGroupItem className="p-3">
        <Row>
          <Col>
            <Form>
              <Row form>
                <Col md="12" className="form-group">
                  <label htmlFor="displayname">Display name</label>
                  <FormInput id="displayname" placeholder="display Name" />
                </Col>
              </Row>
              <Row form>
                <Col md="12" className="form-group">
                  <label htmlFor="description">Description</label>
                  <FormInput id="description" placeholder="first name" />
                </Col>
              </Row>
              <Row form>
                <Col md="12" className="form-group">
                  <label htmlFor="type">Type</label>
                  <FormSelect id="feInputState">
                    <option>Choose...</option>
                    <option>public</option>
                    <option>private</option>
                  </FormSelect>
                </Col>
              </Row>
              <Row form>
                <Col md="6" className="form-group">
                  <Button type="submit" theme="primary">
                    Save
                  </Button>
                </Col>
                <Col md="6" className="form-group">
                  <Button
                    type="reset"
                    theme="warning"
                    style={{ float: "right" }}
                  >
                    cancel
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </ListGroupItem>
    </ListGroup>
  </Card>
);

GroupFormLeft.propTypes = {
  title: PropTypes.string
};

GroupFormLeft.defaultProps = {
  title: "Group add form"
};

export default GroupFormLeft;
