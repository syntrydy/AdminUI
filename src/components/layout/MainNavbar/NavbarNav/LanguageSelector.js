import React, { Component } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse,
  NavItem,
  NavLink
} from "shards-react";

export class LanguageSelector extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };

    this.toggleLangSelector = this.toggleLangSelector.bind(this);
  }

  toggleLangSelector() {
    this.setState({
      visible: !this.state.visible
    });
  }
  render() {
    return (
      <NavItem tag={Dropdown} caret toggle={this.toggleLangSelector}>
        <DropdownToggle caret tag={NavLink} className="text-nowrap px-3">
          <span className="d-none d-md-inline-block">Language</span>
        </DropdownToggle>
        <Collapse tag={DropdownMenu} right small open={this.state.visible}>
          <DropdownItem>English</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>French</DropdownItem>
        </Collapse>
      </NavItem>
    );
  }
}

export default LanguageSelector;
