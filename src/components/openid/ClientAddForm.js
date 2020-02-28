import React from "react";
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
  FormTextarea
} from "shards-react";
import ControlPanel from "../common/ControlPanel";

const ClientAddForm = ({ title }) => {
  return (
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
                  <Col md="6" className="form-group">
                    <label htmlFor="name">Client Name</label>
                    <FormInput id="name" placeholder="client name" />
                  </Col>
                  <Col md="6" className="form-group">
                    <label htmlFor="status">Client type</label>
                    <FormSelect id="feInputState">
                      <option>Choose...</option>
                      <option>Web</option>
                      <option>native</option>
                    </FormSelect>
                  </Col>
                </Row>
                <Row form>
                  <Col md="12" className="form-group">
                    <label htmlFor="description">Description</label>
                    <FormTextarea
                      id="description"
                      placeholder="client description"
                    />
                  </Col>
                </Row>

                <Row form>
                  <Col md="6" className="form-group">
                  <label htmlFor="subjecttye">Subject type</label>
                    <FormSelect id="subjecttye">
                      <option>Choose...</option>
                      <option>pairwise</option>
                      <option>public</option>
                    </FormSelect>
                  </Col>
                  <Col md="6" className="form-group">
                  <label htmlFor="authendmethod">Authentication method for the Token Endpoint</label>
                    <FormSelect id="authendmethod">
                      <option>Choose...</option>
                      <option>client_secret_basic</option>
                      <option>client_secret_post</option>
                      <option>client_secret_jwt</option>
                      <option>private_key_jwt</option>
                      <option>none</option>
                    </FormSelect>
                  </Col>
                </Row>
                <ControlPanel></ControlPanel>
              </Form>
            </Col>
          </Row>
        </ListGroupItem>
      </ListGroup>
    </Card>
  );
};

export default ClientAddForm;
