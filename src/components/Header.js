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
    const bgPink = { backgroundColor: '#DBE0F1', marginBottom: 50 }

    return (
      <div>
        <Router>
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
                  {/* <Reactstrap.Nav.Link ><a href="/aboutus" style={{ color: "black" }}>About Us </a></Reactstrap.Nav.Link>


                  <Reactstrap.Nav.Item>

                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav caret style={{ color: "black" }}>
                        Options
                     </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem>
                          Option 1
                       </DropdownItem>
                        <DropdownItem>
                          Option 2
                       </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                          Reset
                       </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </Reactstrap.Nav.Item>
                  <Reactstrap.Nav.Item>
                    <Reactstrap.Nav.Link style={{ color: "black" }}>Services</Reactstrap.Nav.Link>
                  </Reactstrap.Nav.Item>
                  <Reactstrap.Nav.Item>
                    <Reactstrap.Nav.Link eventKey="link-3" style={{ color: "black" }}>
                      Support
             </Reactstrap.Nav.Link>
                  </Reactstrap.Nav.Item>
                  <Reactstrap.Nav.Item>
                    <Reactstrap.Nav.Link>
                      Log In
          </Reactstrap.Nav.Link>
                  </Reactstrap.Nav.Item> */}
                  <Nav >
                    <NavLink href="/aboutus" style={{ color: "black" }}>About Us</NavLink>

                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav caret style={{ color: "black" }}>
                        Options
              </DropdownToggle>
                      <DropdownMenu left>
                        <DropdownItem>
                          product 1                </DropdownItem>
                        <DropdownItem>
                          product 2
                </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                          product 3
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
        </Router>


      </div >
    );
  }
}

export default Header;