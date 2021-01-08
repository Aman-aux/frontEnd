import React from 'react';
import { MDBContainer, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import * as Reactstrap from "react-bootstrap";
import { DropdownMenu, DropdownToggle, DropdownItem, UncontrolledDropdown, } from 'reactstrap';
import LogIn from './login'
import { Nav, NavItem, NavLink } from 'reactstrap';



class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    const bgPink = { backgroundColor: '#004170', marginBottom: 50 }

    return (
      <div>
        <Router>
          <div marginLeft="100">
            <header>
              <MDBNavbar style={bgPink} dark expand="md" scrolling fixed="top">
                <MDBNavbarBrand>
                  <Reactstrap.Navbar.Brand href="/" style={{ marginLeft: 100 }}>
                    <img
                      alt=""
                      src="/images/logo.PNG"
                      width="50"
                      height="50"
                      className="d-inline-block align-top"
                    />
                  </Reactstrap.Navbar.Brand>

                  <strong style={{ color: "black" }}>a<span style={{ color: "#004170" }}>UX</span>tomate Technologies</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.onClick} />
                <MDBCollapse isOpen={this.state.collapse} navbar>
                  <MDBNavbarNav right>
                    <Nav >
                      <NavLink href="/aboutus" style={{ color: "black" }}>About Us</NavLink>

                      <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret style={{ color: "black" }}>
                          Products
              </DropdownToggle>
                        <DropdownMenu left>
                          <DropdownItem>
                            product 1                </DropdownItem>
                          <DropdownItem>
                            product 2
                </DropdownItem>

                        </DropdownMenu>
                      </UncontrolledDropdown>
                      <NavLink href="/service" style={{ color: "black" }}>Services</NavLink>
                      <NavLink href="/support" style={{ color: "black" }}>Support</NavLink>
                      <NavLink href="/login" style={{ color: "#004170" }}><b>Login</b></NavLink>
                    </Nav>
                  </MDBNavbarNav>


                </MDBCollapse>
              </MDBNavbar>
            </header>
          </div>
        </Router>


      </div >
    );
  }
}

export default Header;