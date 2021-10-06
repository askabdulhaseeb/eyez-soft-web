import React, { useState } from 'react';
import { Collapse, Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { useMediaQuery } from 'react-responsive';

function NavBar(props) {
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 740px)' })
    const styles = {
        navbar: {
            backgroundColor: props.state.primaryColor,
            display: "flex",
            flexWrap: 'wrap',
            width: '100vw',
            position: 'fixed',
            zIndex: 999999,
            marginTop: '-1%'
        },
        logo: {
            flex: 1,
            marginTop: 13,
            marginLeft: 10,
            color: props.state.primaryText
        },
        menu: {
            marginTop: 13,
            marginRight: 10,
            color: props.state.primaryText

        },
        menuList: {
            color: props.state.primaryText,
            fontSize: '1.3em'
        },
        navbarLogo: {
            width: '10vw',
            marginTop: '1%'
        },
        mobileNavbar: {
            backgroundColor: props.state.primaryColor,
            color: props.state.primaryText,
            // display: "flex",
            // flexWrap: 'wrap',
            // width: '100vw',
            padding: '2%',
            // position: 'fixed',
            // zIndex: 999999,
            // marginTop: '-1%'
        },
        menuButton: {
            color: props.state.primaryText,
            fontSize: '2em',
            backgroundColor:'transparent',
            border:'none'
        }
    }

    return (
        <>
            {isTabletOrMobile ? <div >
                <Navbar color="faded" light style={styles.mobileNavbar}>
                    <NavbarBrand href="/" className="mr-auto"><img src={props.state.writtenlogo} style={styles.navbarLogo} /></NavbarBrand>
                    {/* <NavbarToggler onClick={toggleNavbar} className="mr-2" /> */}
                        <button onClick={toggleNavbar} style={styles.menuButton}><i class="fa fa-bars"></i></button>

                    <Collapse isOpen={!collapsed} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink style={styles.menuList} href="/">Home</NavLink>
                            </NavItem>
                            {!props.isContact && <><NavItem>
                                <NavLink style={styles.menuList} href="/#about">About Us</NavLink>
                            </NavItem>
                                <NavItem>
                                    <NavLink style={styles.menuList} href="/#ourServices">Our Services</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink style={styles.menuList} href="/#project">Projects</NavLink>
                                </NavItem></>}

                            <NavItem>
                                <NavLink style={styles.menuList} href="/contact">Contact Us</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div> : <div style={styles.navbar}>
                <div style={styles.logo}>

                    <img src={props.state.writtenlogo} style={styles.navbarLogo} />
                </div>
                <div style={styles.menu}>
                    <Nav>
                        <NavItem>
                            <NavLink style={styles.menuList} href="/">Home</NavLink>
                        </NavItem>
                        {!props.isContact && <><NavItem>
                            <NavLink style={styles.menuList} href="/#about">About Us</NavLink>
                        </NavItem>
                            <NavItem>
                                <NavLink style={styles.menuList} href="/#ourServices">Our Services</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink style={styles.menuList} href="/#project">Projects</NavLink>
                            </NavItem></>}

                        <NavItem>
                            <NavLink style={styles.menuList} href="/contact">Contact Us</NavLink>
                        </NavItem>
                    </Nav>
                </div>

            </div>
            }
        </>
    )
}

export default NavBar;

