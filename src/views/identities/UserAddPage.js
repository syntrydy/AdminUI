import React from "react";
import { Container, Row, Col } from "shards-react";
import PageTitle from "../../components/common/PageTitle";
import UserFormLeft from "../../components/user/UserFormLeft";
import UserFormRight from "../../components/user/UserFormRight";

const UserAddPage = () => (
  <Container fluid className="main-content-container px-4">
    <Row noGutters className="page-header py-1">
      <PageTitle
        title="USER ADD FORM"
        subtitle="IDENTITIES"
        md="12"
        className="ml-sm-auto mr-sm-auto"
      />
    </Row>
    <Row>
      <Col lg="8">
        <UserFormLeft />
      </Col>
      <Col lg="4">
      <UserFormRight />
      </Col>
    </Row>
  </Container>
);

export default UserAddPage;
