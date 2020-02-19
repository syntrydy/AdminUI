import React, { useState } from "react";
import { Tabs, Tab} from "react-bootstrap";

const AcceptDialogBox = () => {
  const [key, setKey] = useState(null);
  return (
    <Tabs id="aCustomTab" activeKey={key} onSelect={k => setKey(k)}>
      <Tab eventKey="home" title="Home"></Tab>
      <Tab eventKey="profile" title="Profile"></Tab>
      <Tab eventKey="contact" title="Contact"></Tab>
    </Tabs>
  );
};

export default AcceptDialogBox;
