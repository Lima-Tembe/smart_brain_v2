import React from "react";
import {
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
} from "reactstrap";
import "./ProfileIcons.css";

class ProfileIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
    };
  }

  toggle = () =>
    this.setState((prevState) => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));

  render() {
    return (
      <div className="pa4 tc">
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle
            tag="span"
            data-toggle="dropdown"
            aria-expanded={this.dropdownOpen}
          >
            <img
              src="http://tachyons.io/img/logo.jpg"
              className="br4 h3 w3 dib"
              alt="avatar"
            />
          </DropdownToggle>
          <DropdownMenu
            right
            className="b--transparent shadow-5"
            style={{ marginTop: "0px" }}
          >
            <DropdownItem header>Account</DropdownItem>
            <DropdownItem onClick={this.props.toggleModal} >View Profile</DropdownItem>
            <DropdownItem divider />
            <DropdownItem onClick={() => this.props.onRouteChange("signout")}>
              Signout
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}

export default ProfileIcon;
