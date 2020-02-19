import React from "react";
import { Container, Row, Col } from "shards-react";
import PageTitle from "../../components/common/PageTitle";
import GroupFormLeft from "../../components/group/GroupFormLeft";
import GroupFormRight from "../../components/group/GroupFormRight";

const GroupAddPage = () => (
  <Container fluid className="main-content-container px-4">
    <Row noGutters className="page-header py-1">
      <PageTitle
        title="GROUP ADD FORM"
        subtitle="IDENTITIES"
        md="12"
        className="ml-sm-auto mr-sm-auto"
      />
    </Row>
    <Row>
      <Col lg="8">
        <GroupFormLeft />
      </Col>
      <Col lg="4">
        <GroupFormRight />
      </Col>
    </Row>
  </Container>
);

export default GroupAddPage;
