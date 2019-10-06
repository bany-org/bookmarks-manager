import React, { Component } from 'react';
import { Navbar, Nav, MenuItem, NavItem, NavDropdown } from 'react-bootstrap';
import { connect } from 'react-redux';
import { logoutUser } from '../../store/actions';
import { Link } from 'react-router-dom';

class NavBar extends Component {

    onLogoutUser = () => {
        window.localStorage.clear();
        this.props.logoutUser()
        // this.props.storeClear()
    }

    render() {
        return (
            <Navbar inverse collapseOnSelect fluid>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">main page</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="#">
                            <Link to="/bookmarks">Zakładki</Link>  
                        </NavItem>
                        <NavItem eventKey={2} href="#">
                                <Link to="/typer">Typer</Link>
                        </NavItem>
                        <NavDropdown eventKey={3} title="Games" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}><Link to="/adventure">Adventure</Link></MenuItem>
                            <MenuItem eventKey={3.2}><Link to="/mathlesson">Matematyka</Link></MenuItem>
                            <MenuItem eventKey={3.3}><Link to="/compare">Znajdź różnicę</Link></MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.3}><Link to="/mastermind">Master mind</Link></MenuItem>
                        </NavDropdown>
                        <NavItem eventKey={2}>
                            <Link to="/authors">Banygroup</Link>
                        </NavItem>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={4}>
                            <Link to="/userpanel">Panel użyszkodnika</Link>
                        </NavItem>
                        <NavItem 
                            eventKey={2} href="#"
                            onClick={this.onLogoutUser}
                        >
                            Wyloguj
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    };
};

    const mapDispatchToProps = dispatch => {
        return {
            logoutUser: () => dispatch(logoutUser()),
        }
    }

export default connect(null, mapDispatchToProps)(NavBar);