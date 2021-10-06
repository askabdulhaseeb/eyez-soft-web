import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import ReactWhatsapp from 'react-whatsapp';
import FooterNavbar from './FooterMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'

function Footer(props) {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 740px)' })

    const [hover, setHover] = useState(false);
    const [eyezHover, setEyezHover] = useState(false);

    const handleMouseEnter = () => {
        setHover(true);
    }
    const handleMouseLeave = () => {
        setHover(false);
    }
    const handleEyezMouseEnter = () => {
        setEyezHover(true);
    }
    const handleEyezMouseLeave = () => {
        setEyezHover(false);
    }


    const styles = {

        btn: {
            backgroundColor: props.state.primaryColor,
            color: "white",
            width: "32%",
            height: "40%",
            fontSize: 17,
            fontWeight: 800,
        },
        Footer: {
            background: props.state.primaryColor,
            display: 'flex',
            flexDirection: 'column'
        },
        iris: {
            fontSize: 15,
            fontWeight: 800,
            flex: 1
        },
        leftSide: {
            flex: 1,
            color: props.state.primaryText,
            paddingTop: '2%',
            paddingLeft: '12%',
        },
        title: {
            fontSize: '3.5rem',
            fontWeight: 800
        },
        multiButton: {
            display: !isTabletOrMobile && 'flex',
            justifyContent: !isTabletOrMobile && 'space-around',
            color: props.state.primaryText,
            flex: 2

        },
        desc: {
            color: props.state.primaryText,
            fontSize: '0.8rem',
            width: '70%',
            textAlign: 'end'
        },
        footerLogo: {
            width: '10vw',
            marginTop: '1%'
        },
        whatsAppBtn: {
            background: 'transparent',
            border: 'none',
            color: hover ? props.state.buttonColor : 'white',
        },
        eyezName: {
            color: eyezHover ? props.state.buttonColor : 'white',
            fontWeight:'bold',
            textDecoration:'none'
        },
        linkUseful: {
            display: 'flex',
            flexDirection: 'column'
        },
        usefulContainer: {
            display: 'flex',
            flexDirection: 'row',
            marginLeft: isTabletOrMobile && '9%',
            width: !isTabletOrMobile && '32vw',
            alignItems: 'flex-start',
            justifyContent: 'inherit'
        },
        poweredBy: {
            fontSize: '0.7em', marginBottom: '2%', textAlign: 'center', color: 'white'
        }
    }

    return (
        <div style={styles.Footer} >
            <div style={{ display: 'flex', flex: 1, flexDirection: isTabletOrMobile && 'column', marginTop: '5%', marginBottom: '5%' }}>
                <div style={styles.leftSide}>
                    <img src={props.state.writtenlogo} style={styles.footerLogo} />
                </div>
                <div style={styles.multiButton}>
                    <div style={{ margin: isTabletOrMobile && '9%' }}>
                        <h3>OFFICES</h3>
                        <p>Los Angeles</p>
                        <p>Lahore</p>
                    </div>

                    <div style={styles.usefulContainer}>
                        <div >
                            <h4>USEFUL LINKS</h4>
                            <FooterNavbar state={props.state} />
                        </div>
                        <div style={{ marginLeft: isTabletOrMobile && '10%' }}>
                            <h3>Who we Are</h3>
                            <p>What We Do</p>
                            <ReactWhatsapp number={'+92-345-1021122'} message={'Hello EYEZ,I want to discuss something'} style={styles.whatsAppBtn}>
                                <span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>+92-345-1021122</span>
                            </ReactWhatsapp>
                        </div>
                    </div>

                </div>
                <hr />
            </div>
            <span style={styles.poweredBy}> Copyright <i class="fa fa-copyright"></i>  {new Date().getFullYear()} <a href="/" onMouseEnter={handleEyezMouseEnter} onMouseLeave={handleEyezMouseLeave} style={styles.eyezName}>EYEZ SOFT</a> | All Rights Reserved</span>

        </div>
    )
}

export default Footer;