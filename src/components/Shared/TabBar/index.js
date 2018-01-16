import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import { PropTypes } from 'prop-types';

const TabBar = (props) => (
    <div className="navBox">
        <div>
            <Navbar color="faded" light expand="md">
                <NavbarToggler />
                <Collapse navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href="/client" className={props.selected === 'client' ? 'active' : ''}>Client</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/provider" className={props.selected === 'provider' ? 'active' : ''}>Provider</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/hospital" className={props.selected === 'hospital' ? 'active' : ''}>Hospital</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/admin" className={props.selected === 'hospitalAdmin' ? 'active' : ''}>Hospital Admin</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    </div>
);

TabBar.propTypes = {
    selected: PropTypes.string,
};

export default TabBar;
