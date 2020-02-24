import React, { useState } from "react";
import i18n from "../../../../i18n";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { NavItem } from "shards-react";

const LanguageSelector = () => {
  const [currentLang, setLang] = useState("en");
  function changeLanguage(lng) {
    setLang(lng);
    i18n.changeLanguage(lng);
  }
  return (
    <NavItem>
      <DropdownButton
        style={{
          "marginTop": "20px",
          "marginLeft": "10px",
          "backgroundColor": "red !important"
        }}
        id="dropdown-item-button"
        title={currentLang}
        size="sm"
      >
        <Dropdown.Item onSelect={() => changeLanguage("en")}>en</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item onSelect={() => changeLanguage("fr")}>fr</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item onSelect={() => changeLanguage("ru")}>ru</Dropdown.Item>
      </DropdownButton>
    </NavItem>
  );
};

export default LanguageSelector;
