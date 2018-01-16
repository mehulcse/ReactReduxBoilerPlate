import React, { Component } from 'react';
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Row, Col } from 'reactstrap';
import logo from 'assets/images/logo.png';
import logout from 'assets/images/logout-icon.png';

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false,
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen,
        });
    }
    render() {
        return (
            <div>
                <header className="header">
                    <Row>
                        <Col xs="10"><img src={logo} alt="logo" /></Col>
                        <Col xs="2">
                            <div>
                                <div className="logout float-right"><a href="#"> <img src={logout} alt="logout" /></a></div>
                                <div className="float-right">
                                    <Navbar color="faded" light expand="md">
                                        <NavbarToggler onClick={this.toggle} />
                                        <Collapse isOpen={this.state.isOpen} navbar>
                                            <Nav className="ml-auto" navbar>
                                                <UncontrolledDropdown nav inNavbar>
                                                    <DropdownToggle nav caret>
                            Welcome, Sam
                                                    </DropdownToggle>
                                                    <DropdownMenu>
                                                        <DropdownItem>
                              Option 1
                                                        </DropdownItem>
                                                        <DropdownItem>
                              Option 2
                                                        </DropdownItem>
                                                        <DropdownItem />
                                                        <DropdownItem>
                              Reset
                                                        </DropdownItem>
                                                    </DropdownMenu>
                                                </UncontrolledDropdown>
                                            </Nav>
                                        </Collapse>
                                    </Navbar>
                                </div>


                            </div>
                        </Col>
                    </Row>
                </header>

            </div>
        );
    }
}
