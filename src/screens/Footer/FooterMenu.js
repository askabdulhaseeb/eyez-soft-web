import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
function FooterNavbar(props) {
    const styles = {
        menuList: {
            color: props.state.primaryText,
            fontSize: '1em'
        },
    }

    return (

        <Nav style={{ flexDirection: 'column' }}>
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

    )
}

export default FooterNavbar;
